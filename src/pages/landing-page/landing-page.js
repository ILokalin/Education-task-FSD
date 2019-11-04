// Styles
import './landing-page.scss';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';

// modules
import SelectForm from '../../modules/form-selection/form-selection';



var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => { 
  const selectForm = new SelectForm();


});
