import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer mmUGdg5m1sXVEy-B1oYSeyHcHJjRGW6kbqYe_WBCh7a-WegWyFOYQoVBhHXRHk2GVqrbC2u536jrBeIXr_wRnSgxhMbKuUuOLDb3WJi_OzHdujVelhqXBM7BrJB8X3Yx'
  }
});



