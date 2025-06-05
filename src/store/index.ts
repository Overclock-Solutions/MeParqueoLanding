import { create } from 'zustand';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
  role: string;
};

type State = {
  formSubmitted: boolean;
  submitContactForm: (data: ContactFormData) => void;
};

export const useStore = create<State>((set) => ({
  formSubmitted: false,
  submitContactForm: (data: ContactFormData) => {
    // In a real app, this would make an API call
    console.log('Form submitted:', data);
    
    // Simulate API call delay
    setTimeout(() => {
      set({ formSubmitted: true });
    }, 500);
  },
}));