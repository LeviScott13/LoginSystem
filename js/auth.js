//get data
db.collection('vehicles').get().then(snapshot => {
    setupGuides(snapshot.docs);

});


// listen for auth status change
auth.onAuthStateChanged(user => {
    
    var signedIn = document.getElementById('signedIn');
    var trucks = document.getElementById('trucks');
    var warning = document.getElementById('warning');
    // if logged in
    if(user){
        console.log('user logged in ', user);
        signedIn.style.visibility = 'visible';
        trucks.style.visibility = 'visible';
        warning.style.display = 'none';
    }
    //if logged out
    else{
        console.log('user logged out');
        signedIn.style.visibility = 'hidden';
        trucks.style.visibility = 'hidden';
        warning.style.display = 'inline';

    }
});

//Signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    //get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    // sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        const modal = document.querySelector('#modal-signup');
        var instance = M.Modal.init(modal);
        instance.close();
        signupForm.reset();
    });
});

// Logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
});

// Login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info=
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {

        // close the login modal and reset the form
        const modal = document.querySelector('#modal-login');
        var instance = M.Modal.init(modal);
        instance.close();
        loginForm.reset();
    });
});