const handleSubmit = () => {
    const name = document.getElementsByClassName('name')[0];
    const email = document.getElementsByClassName('email')[0];
    if (name.value === '' | email.value === '') {
        alert('Não foi possível realizar o cadastro');
    } else {
        alert('Cadastro efetuado com sucesso!')
    }
}