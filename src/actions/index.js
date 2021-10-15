export const PERSONAL_HANDLE = 'PERSONAL_HANDLE';
export const PROFESSIONAL_HANDLE = 'PROFESSIONAL_HANDLE';

export const personalHandle = (personalInfo) => ({
  type: PERSONAL_HANDLE,
  payload: personalInfo,
});

export const professionalHandle = (professionalInfo) => ({
  type: PROFESSIONAL_HANDLE,
  payload: professionalInfo,
});
