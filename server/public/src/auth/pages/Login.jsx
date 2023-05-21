import { useState } from 'react';


export const Login = () => {

  const [correoInput, setCorreoInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const url = 'http://localhost:8080/'

  async function onSubmitLogin(event) {
    event.preventDefault();
    debugger
    try {
      let _datos = {
        correo: correoInput,
        password: passwordInput
      }

      if(!correoInput || !passwordInput){
        alert("Introduzca un correo válido")
        return;
      }


      const response = await fetch(`${url}api/auth/login`, {
        method: "POST",
        body: JSON.stringify(_datos),
        headers: {
          "Content-Type": "application/json",
        }

      });

      const data = await response.json();
      console.log(data)
  
      if (response.status !== 200) {
        console.log(response)
        throw data.error || new Error(`${response.message}`);
      }
      if(data.token){
        localStorage.setItem('token', JSON.stringify(data.token))
        localStorage.setItem('user', JSON.stringify(data.usuario))
        alert("Tenemos token")
      }
      alert(`Login ok`)

    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert("No hemos podido acceder a su cuenta.");
    }
  }

  return (
    <>
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <img class="mx-auto h-10 w-auto" src="src\ui\img\logos\HNegro.png" alt="Hebe Web" />
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Accede a tu cuenta</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" action="#" method="POST" onSubmit={onSubmitLogin}>
            <div>
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Correo electrónico:</label>
              <div class="mt-2">
                <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"    value={correoInput}
          onChange={(e) => setCorreoInput(e.target.value)}/>
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
                <div class="text-sm">
                  {/* <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a> */}
                </div>
              </div>
              <div class="mt-2">
                <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"       value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}/>
              </div>
            </div>

            <div>
              <button type="submit" class="flex w-full justify-center rounded-md bg-grisHebe px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-grisHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grisHebe">Acceder</button>
            </div>
          </form>

          <p class="mt-10 text-center text-sm text-gray-500">
            Not a member?
    
          </p>
        </div>
      </div>
    </>
  )
}