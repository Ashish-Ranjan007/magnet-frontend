export const validateEmail = (email: string): boolean => {
    // Simple regex for basic email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};
