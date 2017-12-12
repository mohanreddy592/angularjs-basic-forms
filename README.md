# angularjs-basic-forms

For Reference: https://www.w3schools.com/angular/angular_validation.asp

Form State and Input State
AngularJS is constantly updating the state of both the form and the input fields.

Input fields have the following states:

$untouched The field has not been touched yet
$touched The field has been touched
$pristine The field has not been modified yet
$dirty The field has been modified
$invalid The field content is not valid
$valid The field content is valid

They are all properties of the input field, and are either true or false.

Forms have the following states:

$pristine No fields have been modified yet
$dirty One or more have been modified
$invalid The form content is not valid
$valid The form content is valid
$submitted The form is submitted
They are all properties of the form, and are either true or false.
