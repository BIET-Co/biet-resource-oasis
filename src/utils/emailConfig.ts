
export const EMAIL_CONFIG = {
  publicKey: localStorage.getItem('emailjs_public_key') || '',
  templateId: localStorage.getItem('emailjs_template_id') || '',
  serviceId: localStorage.getItem('emailjs_service_id') || '',
};

export const setEmailJsConfig = (config: {
  publicKey?: string;
  templateId?: string;
  serviceId?: string;
}) => {
  if (config.publicKey) {
    localStorage.setItem('emailjs_public_key', config.publicKey);
  }
  if (config.templateId) {
    localStorage.setItem('emailjs_template_id', config.templateId);
  }
  if (config.serviceId) {
    localStorage.setItem('emailjs_service_id', config.serviceId);
  }
};

export const clearEmailJsConfig = () => {
  localStorage.removeItem('emailjs_public_key');
  localStorage.removeItem('emailjs_template_id');
  localStorage.removeItem('emailjs_service_id');
};
