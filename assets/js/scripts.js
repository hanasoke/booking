const auth = firebase.auth();

function signOut() {
    Swal.fire({
        title: 'Apakah Anda Yakin',
        text: 'Ingin Keluar dari Halaman',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Keluar'
    }).then((result) => {
        if (result.value) {
            firebase.auth().signOut();
            document.location.href = "../login/login.html";
        }
    });

}