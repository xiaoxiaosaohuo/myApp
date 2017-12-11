/**
 * @desc [For Rehydration redux]
 */

 /* Constant Types */
const STARTAPP = 'STARTAPP';

export const StartAppTypes = {
  STARTAPP
};

/* Action Creators */
const startApp =  params => {
  return {
    type: STARTAPP
  };
};

export const StartAppActions = {
  startApp
};
