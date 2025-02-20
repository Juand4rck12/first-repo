# ChatGPT o3 - mini:
import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D  # registers the 3D projection
from matplotlib.animation import FuncAnimation

# -----------------------------
# Parameters and helper functions
# -----------------------------

# Orbit parameters (in arbitrary AU units)
r_E = 1.0         # Earth's orbit radius
r_M = 1.524       # Mars' orbit radius

# Orbital periods (in frames; these values are chosen for visualization)
T_E = 300         # Earth completes an orbit in 300 frames
T_M = 600         # Mars completes an orbit in 600 frames

# Mission timeline (in frames)
# Segment 1: Earth -> Mars  : frames 0   to 100
# Segment 2: Stay at Mars   : frames 101 to 150
# Segment 3: Mars -> Earth  : frames 151 to 250
frames_total = 250

def earth_position(frame):
    """Return Earth’s position in the x-y plane at a given frame."""
    theta = 2 * np.pi * frame / T_E
    return np.array([r_E * np.cos(theta), r_E * np.sin(theta), 0])

def mars_position(frame):
    """
    Return Mars’ position in the x-y plane at a given frame.
    A phase offset is chosen so that at frame=100 Mars is at (r_M,0,0).
    """
    theta = 2 * np.pi * frame / T_M - np.pi/3  # phase shift so that at frame 100, Mars = (r_M, 0, 0)
    return np.array([r_M * np.cos(theta), r_M * np.sin(theta), 0])

def quadratic_bezier(t, p0, p1, p2):
    """
    Return a point on a quadratic Bezier curve defined by p0, p1, p2.
    t should vary between 0 and 1.
    """
    return (1 - t)**2 * p0 + 2 * (1 - t) * t * p1 + t**2 * p2

# Pre-calculate control points for the spacecraft’s transfer segments.
# --- Segment 1 (Earth → Mars) ---
p0_seg1 = earth_position(0)         # departure from Earth at frame 0
p2_seg1 = mars_position(100)          # arrival at Mars at frame 100
# Choose a control point that lifts the trajectory out of the orbital plane.
p_mid_seg1 = (p0_seg1 + p2_seg1) / 2
p1_seg1 = p_mid_seg1 + np.array([0, 0, 0.5])  # add an upward (z) offset

# --- Segment 3 (Mars → Earth) ---
p0_seg3 = mars_position(150)          # departure from Mars at frame 150
p2_seg3 = earth_position(250)         # arrival back at Earth at frame 250
p_mid_seg3 = (p0_seg3 + p2_seg3) / 2
p1_seg3 = p_mid_seg3 + np.array([0, 0, 0.5])  # add a z offset

# -----------------------------
# Set up the 3D plot and static elements
# -----------------------------

fig = plt.figure(figsize=(8, 6))
ax = fig.add_subplot(111, projection='3d')
ax.set_title('Launch from Earth → Mars → Return to Earth')
ax.set_xlabel('X (AU)')
ax.set_ylabel('Y (AU)')
ax.set_zlabel('Z (AU)')

# Set axis limits
ax.set_xlim([-2, 2])
ax.set_ylim([-2, 2])
ax.set_zlim([-1, 1.5])

# Plot the Sun at the origin
ax.scatter(0, 0, 0, color='yellow', s=200, label='Sun')

# Plot Earth’s orbit (blue dashed circle)
theta_vals = np.linspace(0, 2 * np.pi, 200)
earth_orbit_x = r_E * np.cos(theta_vals)
earth_orbit_y = r_E * np.sin(theta_vals)
earth_orbit_z = np.zeros_like(theta_vals)
ax.plot(earth_orbit_x, earth_orbit_y, earth_orbit_z, 'b--', label='Earth Orbit')

# Plot Mars’ orbit (red dashed circle) with the same phase shift
mars_orbit_x = r_M * np.cos(theta_vals - np.pi/3)
mars_orbit_y = r_M * np.sin(theta_vals - np.pi/3)
mars_orbit_z = np.zeros_like(theta_vals)
ax.plot(mars_orbit_x, mars_orbit_y, mars_orbit_z, 'r--', label='Mars Orbit')

# -----------------------------
# Initialize animated objects: markers for Earth, Mars, and spacecraft
# -----------------------------

earth_marker, = ax.plot([], [], [], 'bo', markersize=8, label='Earth')
mars_marker, = ax.plot([], [], [], 'ro', markersize=8, label='Mars')
sc_marker, = ax.plot([], [], [], 'ko', markersize=4, label='Spacecraft')

# For tracing the spacecraft’s path:
sc_path, = ax.plot([], [], [], 'k-', linewidth=1)
sc_traj = []  # to store the spacecraft positions over time

# -----------------------------
# Animation update function
# -----------------------------

def update(frame):
    # Update Earth and Mars positions (their orbits evolve with time)
    e_pos = earth_position(frame)
    m_pos = mars_position(frame)
    earth_marker.set_data([e_pos[0]], [e_pos[1]])
    earth_marker.set_3d_properties([e_pos[2]])
    mars_marker.set_data([m_pos[0]], [m_pos[1]])
    mars_marker.set_3d_properties([m_pos[2]])
    
    # Determine spacecraft position based on the mission phase:
    if frame <= 100:
        # Segment 1: Transfer from Earth to Mars (using quadratic Bezier)
        t_norm = frame / 100.0
        sc_pos = quadratic_bezier(t_norm, p0_seg1, p1_seg1, p2_seg1)
    elif frame <= 150:
        # Segment 2: Waiting at Mars – the spacecraft stays at Mars (which is moving)
        sc_pos = mars_position(frame)
    else:
        # Segment 3: Return from Mars to Earth
        t_norm = (frame - 150) / (250 - 150)
        sc_pos = quadratic_bezier(t_norm, p0_seg3, p1_seg3, p2_seg3)
    
    sc_marker.set_data([sc_pos[0]], [sc_pos[1]])
    sc_marker.set_3d_properties([sc_pos[2]])
    
    # Update spacecraft trajectory trace
    sc_traj.append(sc_pos)
    traj_array = np.array(sc_traj)
    sc_path.set_data(traj_array[:, 0], traj_array[:, 1])
    sc_path.set_3d_properties(traj_array[:, 2])
    
    return earth_marker, mars_marker, sc_marker, sc_path

# -----------------------------
# Create and run the animation
# -----------------------------

ani = FuncAnimation(fig, update, frames=frames_total+1, interval=50, blit=False)

ax.legend(loc='upper left')
plt.show()
