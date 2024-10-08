import express from 'express';
import hubService from '../services/setHubStatusService'; // Ensure this path is correct

const router = express.Router();

// This endpoint will handle setting the hub's online status
router.put('/hubs/:hubId/status', async (req, res) => {
  const { hubId } = req.params; // Get the hubId from the request parameters
  const { is_online } = req.body; // Get the status from the request body

  try {
    const updatedHub = await hubService.updateHubStatus(hubId, is_online); // Call your hub service

    if (!updatedHub) {
      return res.status(404).json({ message: `Hub with ID ${hubId} not found` });
    }

    return res.status(200).json({ message: 'Hub status updated successfully', updatedHub });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to update hub status', error: (error as Error).message });
  }
});

export default router;
