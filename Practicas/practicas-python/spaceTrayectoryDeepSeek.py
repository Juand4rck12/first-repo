# DeepSeek:
import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
from matplotlib.animation import FuncAnimation

# Set up the figure and 3D axis
fig = plt.figure(figsize=(10, 8))
ax = fig.add_subplot(111, projection='3d')
ax.set_xlim(-2, 2)
ax.set_ylim(-2, 2)
ax.set_zlim(-2, 2)
ax.set_xlabel('X (AU)')
ax.set_ylabel('Y (AU)')
ax.set_zlabel('Z (AU)')
ax.set_title('Earth-Mars Round-Trip Mission Animation')

# Orbital parameters
earth_orbit_radius = 1.0          # AU
mars_orbit_radius = 1.524         # AU
earth_orbital_period = 365        # days
mars_orbital_period = 687         # days
transfer_time = 257               # days (Hohmann transfer duration)
total_days = 771                  # days (total mission duration)
days_per_frame = 5                # days per animation frame

# Calculate Hohmann transfer parameters
a = (earth_orbit_radius + mars_orbit_radius) / 2  # Semi-major axis
e = (mars_orbit_radius - earth_orbit_radius) / (mars_orbit_radius + earth_orbit_radius)  # Eccentricity

# Initialize plot elements
earth_orbit, = ax.plot([], [], [], 'b-', lw=0.5)
mars_orbit, = ax.plot([], [], [], 'r-', lw=0.5)
earth_point, = ax.plot([], [], [], 'bo', markersize=8, label='Earth')
mars_point, = ax.plot([], [], [], 'ro', markersize=6, label='Mars')
spacecraft_trajectory, = ax.plot([], [], [], 'k-', lw=1)
spacecraft_point, = ax.plot([], [], [], 'ko', markersize=4, label='Spacecraft')
ax.legend(loc='upper right')

# Precompute orbits for visualization
theta = np.linspace(0, 2*np.pi, 100)
earth_orbit_x = np.cos(theta)
earth_orbit_y = np.sin(theta)
earth_orbit_z = np.zeros_like(theta)

mars_orbit_x = 1.524 * np.cos(theta)
mars_orbit_y = 1.524 * np.sin(theta)
mars_orbit_z = np.zeros_like(theta)

# Precompute Mars' position at start of return trip
return_start_day = 2 * transfer_time
theta_mars_return_start = 2 * np.pi * return_start_day / mars_orbital_period
x_mars_return_start = mars_orbit_radius * np.cos(theta_mars_return_start)
y_mars_return_start = mars_orbit_radius * np.sin(theta_mars_return_start)

# Initialize trajectory storage
x_sc, y_sc, z_sc = [], [], []

def update(frame):
    t = frame * days_per_frame
    x_sc.clear()
    y_sc.clear()
    z_sc.clear()
    
    for ti in range(0, t + 1, days_per_frame):
        # Calculate Earth and Mars positions
        theta_earth = 2 * np.pi * ti / earth_orbital_period
        x_earth = np.cos(theta_earth)
        y_earth = np.sin(theta_earth)
        
        theta_mars = 2 * np.pi * ti / mars_orbital_period
        x_mars = mars_orbit_radius * np.cos(theta_mars)
        y_mars = mars_orbit_radius * np.sin(theta_mars)
        
        # Calculate spacecraft position
        if ti <= transfer_time:  # Outbound transfer
            theta_sc = np.pi * ti / transfer_time
            r_sc = a * (1 - e**2) / (1 + e * np.cos(theta_sc))
            x = r_sc * np.cos(theta_sc)
            y = r_sc * np.sin(theta_sc)
        elif ti <= 2*transfer_time:  # Stay at Mars
            x = x_mars
            y = y_mars
        else:  # Return transfer
            frac = (ti - 2*transfer_time) / transfer_time
            current_earth_x = np.cos(2 * np.pi * ti / earth_orbital_period)
            current_earth_y = np.sin(2 * np.pi * ti / earth_orbital_period)
            x = x_mars_return_start + (current_earth_x - x_mars_return_start) * frac
            y = y_mars_return_start + (current_earth_y - y_mars_return_start) * frac
        
        x_sc.append(x)
        y_sc.append(y)
        z_sc.append(0)

    # Update orbital lines
    earth_orbit.set_data(earth_orbit_x, earth_orbit_y)
    earth_orbit.set_3d_properties(earth_orbit_z)
    mars_orbit.set_data(mars_orbit_x, mars_orbit_y)
    mars_orbit.set_3d_properties(mars_orbit_z)
    
    # Update current positions
    earth_point.set_data([x_earth], [y_earth])
    earth_point.set_3d_properties([0])
    mars_point.set_data([x_mars], [y_mars])
    mars_point.set_3d_properties([0])
    spacecraft_point.set_data([x_sc[-1]], [y_sc[-1]])
    spacecraft_point.set_3d_properties([0])
    
    # Update trajectory
    spacecraft_trajectory.set_data(x_sc, y_sc)
    spacecraft_trajectory.set_3d_properties(z_sc)
    
    return earth_orbit, mars_orbit, earth_point, mars_point, spacecraft_trajectory, spacecraft_point

# Create animation
frames = total_days // days_per_frame
ani = FuncAnimation(fig, update, frames=frames, interval=50, blit=True)

plt.show()