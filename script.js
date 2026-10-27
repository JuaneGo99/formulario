const URL_WEBAPP =
"https://script.google.com/macros/s/AKfycbw0E6J7TKsgFNAxv5zbQs4_AGikpLwKZYh15JJbbvsFumvg4-_cjmzMkIYF3sFxy_hDEw/exec";

async function guardarDatos() {

    const mensaje =
    document.getElementById("mensaje");

    const datos = {

        numero: document.getElementById("numero").value,
        edadGestacional: document.getElementById("edadGestacional").value,
        prematurez: document.getElementById("prematurez").value,
        sexo: document.getElementById("sexo").value,
        tipoParto: document.getElementById("tipoParto").value,
        apgar: document.getElementById("apgar").value,
        talla: document.getElementById("talla").value,
        peso: document.getElementById("peso").value,
        estancia: document.getElementById("estancia").value,
        diagnostico: document.getElementById("diagnostico").value,
        usoAntimicrobiano: document.getElementById("usoAntimicrobiano").value,
        antimicrobianos: document.getElementById("antimicrobianos").value,
        tipoMuestra: document.getElementById("tipoMuestra").value,
        microorganismo: document.getElementById("microorganismo").value,
        medR: document.getElementById("medR").value,
        medI: document.getElementById("medI").value,
        medS: document.getElementById("medS").value,
        antecedentes: document.getElementById("antecedentes").value
    };

    if(datos.numero === ""){

        mensaje.className = "error";
        mensaje.innerHTML =
        "Ingrese el número de registro.";

        return;
    }

    try{

        const boton =
        document.querySelector(".btn-guardar");

        boton.disabled = true;
        boton.textContent = "Guardando...";

        await fetch(URL_WEBAPP,{
    method:"POST",
    mode:"no-cors",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(datos)
});

        mensaje.className = "exito";
        mensaje.innerHTML =
        "✅ Registro guardado correctamente.";

        document
        .getElementById("formPaciente")
        .reset();

    }
    catch(error){

        console.error(error);

        mensaje.className = "error";
        mensaje.innerHTML =
        "❌ Error al guardar el registro.";

    }
    finally{

        const boton =
        document.querySelector(".btn-guardar");

        boton.disabled = false;
        boton.textContent = "Guardar Registro";
    }
}

function limpiarFormulario(){

    if(confirm("¿Desea limpiar todos los campos?")){

        document
        .getElementById("formPaciente")
        .reset();

        document
        .getElementById("mensaje")
        .innerHTML = "";
    }
}