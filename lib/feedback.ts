// lib/feedback.ts

export async function submitFeedback(formData: FormData) {
    try {
      const response = await fetch('/api/submit-feedback', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit feedback');
      }
  
      const data = await response.json();
  
      return {
        success: true,
        message: 'Feedback submitted successfully!',
      };
    } catch (error) {
      return {
        success: false,
        message: (error as Error).message || 'Something went wrong',
      };
    }
  }
  