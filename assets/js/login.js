firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    if (user != null) {
      window.location.href = "../../admin/bookingList.html"
    }

  } else {
    // No user is signed in.


  }
});

const auth = firebase.auth();

function login() {

  const userEmail = document.getElementById("email_field").value;
  const userPass = document.getElementById("password_field").value;

  const form = document.forms["Login"]["email"].value;
  const at = form.indexOf("@");
  const dot = form.lastIndexOf(".");

  if (userEmail == "" && userPass != "") {
    Swal.fire({
      title: 'Email kosong',
      text: 'Email wajib diisi',
      icon: 'info',
      confirmButtonColor: '#2ecc71'
    });
  } else if (userEmail == "" && userPass == "") {
    Swal.fire({
      title: 'Form Kosong',
      text: 'Form wajib diisi',
      icon: 'info',
      confirmButtonColor: '#2ecc71'
    });
  } else if (userEmail != "" && userPass == "") {
    Swal.fire({
      title: 'Password kosong',
      text: 'Password wajib diisi',
      icon: 'info',
      confirmButtonColor: '#2ecc71'
    });
  } else if (at < 1 || dot < at + 2 || dot + 2 >= form.length) {
    Swal.fire({
      title: 'Alamat Email Tidak Valid',
      text: 'Mohon isi alamat email dengan benar',
      icon: 'warning',
      confirmButtonColor: '#2ecc71'
    });
  } else {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
            document.location.href = "../admin/bookingList.html";
          }
        });

        Toast.fire({
          icon: 'success',
          title: 'Selamat Datang ',
        });

      } else {
        // No user is signed in.
        firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;

          this.alert("Error : " + errorMessage);

        });

      }
    });

  }


}