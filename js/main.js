//Simludaor Teenage Babe

//Datos de ingresos habilitados
const ingresosFree = [
    { id: 101, password: 101000},
    { id: 102, password: 101001},
    { id: 103, password: 101002},
    { id: 104, password: 101003},
]

//Menu
const teenageBabe = [ 
    { item: 'Inicio', subitem: [' Lista', ' Calendario']}, 
    { item: 'Notificaciones', subitem:[' Ingresos', ' Egresos', ' Sin Registro']},  
    { item: 'Contactos', subitem: [' Empresa', ' Referentes', ' Coordinadores']},
    { item: 'Manual', subitem: [' Preguntas Frecuentes']}
]

//Agregue el mensaje dentro del form para informar sobre el acceso
const formCreate = document.querySelector('form');
const parrafo = document.createElement('p');
parrafo.textContent = "El acceso está habilitado exclusivamente a usuarios autorizados."
formCreate.appendChild(parrafo);

//Aqui agregue el menu que aparecera al entrar pero sin opcion de movimiento. Solo informativo
const boxIngreso = document.getElementById("box-seccion");
function processMenu(opciones) {
    boxIngreso.innerHTML = "";
        
        for (const seccion of opciones) {
            
            boxIngreso.innerHTML += `
            <div class="box-seccion">
            <h3>${seccion.item}</h3>
            </div>
        `;
        } 
};
processMenu(teenageBabe);

//Aqui trabajo mi acceso con los datos necesarios para cada id y password
const inputID = document.getElementById('ID')
const inputPassword = document.getElementById('password')
const ingreso = document.getElementById('boton')

ingreso.addEventListener('click', function acceso(ciclo){

    ciclo.preventDefault();

    boxIngreso.innerHTML = "";

const ingresoId = Number(inputID.value); 
const ingresoPassword = Number(inputPassword.value);

const usuariosHabilitados = ingresosFree.find((user) => user.id === ingresoId)

                if (usuariosHabilitados && usuariosHabilitados.password === ingresoPassword){

                        if (ingresoId === 101 && ingresoPassword === 101000){

                            processMenu(teenageBabe.concat({ item:'Informes', item:'Avanzadas y Restricciones'}));

                                            const teenageTeam = teenageBabe.filter(menu => menu.subitem);
                                            const optionMenu = teenageTeam.map(menu => menu.subitem).join(' , ');
                            
                            const mainMensaje = document.querySelector('main');
                            mainMensaje.innerHTML = ""; 

                            const mensajePrivado = document.createElement('h4');
                            mensajePrivado.className = "para-Ana"; 
                            mensajePrivado.textContent = `Bienvenida Ana. Tu ingreso contará con la sección Avanzadas y Restricciones para tu configuración personal. El menú tiene las siguientes opciones: ${optionMenu}`;
    
                            mainMensaje.appendChild(mensajePrivado);

                                }else if (ingresoId === 102 && ingresoPassword === 101001){

                                    const menuEmpresa = teenageBabe.concat({ item: 'Informes'});
                                    processMenu(menuEmpresa)

                                            const teenageTeam = teenageBabe.filter(menu => menu.subitem);
                                            const optionMenu = teenageTeam.map(menu => menu.subitem).join(' , ');

                                            const mainMensaje = document.querySelector('main');
                                            mainMensaje.className = "mensaje-general"; 
                                            mainMensaje.innerHTML = `¡Bienvenido a Teenage Babe! Tus accesos tienen las siguientes opciones son: ${optionMenu}. Ademas tendras en tu menu principal el item de Informes donde podras ver las actualizaciones de las novedades diarias.`;

                                        } else if ( ingresoId === 103 || ingresoId === 104) {

                                            processMenu(teenageBabe)

                                            const teenageTeam = teenageBabe.filter(menu => menu.subitem);
                                            const optionMenu = teenageTeam.map(menu => menu.subitem).join(', ');

                                            const mainMensaje = document.querySelector('main');
                                            mainMensaje.className = "mensaje-general";
                                            mainMensaje.innerHTML = `¡Bienvenido a Teenage Babe! Tus accesos son: ${optionMenu}`;

                                            } else{
                                                boxIngreso.innerHTML = "Ingreso denegado. Ingrese nuevamente más tarde.";
                                            } 
                                            
                                        } else {
                                            boxIngreso.innerHTML = "ACCESO DENEGADO: Los datos ingresados son incorrectos.";
}
});

//Habilito tambien la opcion de Enter para ingresar.
inputPassword.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        ingreso.click();        
    }
});






/*Funciona pero no me sirve para esta entrega - Solo ocultar hasta que pueda utilizarlo nuevamente

ingreso.addEventListener('click', function acceso(){

    const ingresoId = Number(inputID.value); 
    const ingresoPassword = Number(inputPassword.value);

const usuariosHabilitados = ingresosFree.find((user) => user.id === ingresoId)

                if (usuariosHabilitados && usuariosHabilitados.password === ingresoPassword){

                        if (ingresoId === 101 && ingresoPassword === 101000){
                                alert('Bienvenida Ana. Tu menu de trabajo tambien contara con la seccion Avanzadas y Restricciones para tu configuración personal: ', teenageBabe.concat('Avanzadas y Restricciones'));
                            
                            } else if (ingresoId === 102 || ingresoId === 103 || ingresoId === 104){

                                const teenageTeam = teenageBabe
                                        .filter((menu) => menu.subitem)
                                        .map((menu) => ({ 
                                                item: menu.item,
                                        subitem: menu.subitem }))
                                alert("Buenvenido a Teenage Babe! A continuación veras las opciones de menu disponibles: ", teenageTeam); 
                            } else {
                                alert('Ingrese nuevamente mas tarde');
                            }

                        } else {
                            alert("Acceso denegado: los datos ingresados son incorrectos.");
    }
});*/

