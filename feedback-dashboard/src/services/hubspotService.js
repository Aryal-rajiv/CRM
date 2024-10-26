import hubspotClient from '../utils/hubspotClient';

export const submitFeedback = async (data) => {
  try {
    const response = await hubspotClient.crm.objects.feedback.create(data);
    return response;
  } catch (error) {
    console.error('HubSpot API error:', error);
    throw error;
  }
};
