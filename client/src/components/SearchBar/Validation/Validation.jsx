const Validation = (props) => {
  const fecha_actual = new Date().toLocaleDateString();
  const errors = {};
  const adults = parseInt(props.adults);
  const children = parseInt(props.children);
  const check_in = props.check_in.split("-");
  const check_out = props.check_out.split("-");

  //ADULTS
  if (adults < 0) errors.adults = "Ingresó un numero menor a 0.";
  else if (adults > 10) errors.adults = "Máximo 10 personas.";

  // CHILDREN
  if (children < 0) errors.children = "Ingresó un numero menor a 0";
  else if (children > 10) errors.children = "Máximo 10 personas.";

  // SUMA CHILDREN Y ADULTS
  if (children + adults > 10) errors.max_cant = "Máximo 10 personas.";

  //CHECKIN
  const listaFecha = fecha_actual.split("/");
  const diaActual = parseInt(listaFecha.at(0));
  const mesActual = parseInt(listaFecha.at(1));
  const anioActual = parseInt(listaFecha.at(2));

  //*************PRUEBA CON MES DIFERENTE*************\\
  //   const diaActual = 24;
  //   const mesActual = 9;
  //   const anioActual = 2023;

  const diaCheckIn = parseInt(check_in.at(2));
  const mesCheckIn = parseInt(check_in.at(1));
  const anioCheckIn = parseInt(check_in.at(0));

  // compruebo si el dia del checkIn es menor al dia actual
  if (diaCheckIn < diaActual) {
    // si el dia del checkIn es menor al dia actual, chequeo si el mes del checkIn es diferente al mes actual
    if (mesCheckIn !== mesActual) {
      // si el mes del checkIn es diferente al mes actual, chequeo si es menor al mes actual
      if (mesCheckIn < mesActual) {
        // si el mes del checkIn es menor al mes actual, chequeo si el año del checkIn es menor o igual al año actual
        if (anioCheckIn <= anioActual) {
          errors.check_in = "Dia anterior";
        }
      }

      // compruebo si el mes del checkin es mayor al mes actual
      if (mesCheckIn > mesActual) {
        // si es mayor, compruebo si el año del checkin es menor al año actual
        if (anioCheckIn < anioActual) {
          errors.check_in = "Dia anterior";
        }
      }
    }
    // si el mes del checkin es igual al mes actual es un dia anterior, porque si entro aca es porque el dia es menor.
    if (mesCheckIn === mesActual) {
      errors.check_in = "Dia anterior";
    }
  }

  if (diaCheckIn > diaActual) {
    if (mesCheckIn !== mesActual) {
      if (mesCheckIn < mesActual) {
        if (anioCheckIn <= anioActual) {
          errors.check_in = "Dia anterior";
        }
      }

      if (mesCheckIn > mesActual) {
        if (anioCheckIn < anioActual) {
          errors.check_in = "Dia anterior";
        }
      }
    }
  }

  // si el dia, mes y año del checkin son iguales al dia, mes y año actual, significa que quiere ingresar hoy
  // por lo que daria un error (tiene que ser para el dia siguiente)
  if (
    diaCheckIn === diaActual &&
    mesCheckIn === mesActual &&
    anioCheckIn === anioActual
  ) {
    errors.check_in = "Debe ser a partir de mañana";
  }

  // si el año del checkin es menor al año actual, es una fecha anterior.
  if (anioCheckIn < anioActual) {
    errors.check_in = "Dia anterior";
  }

  // CHECK OUT
  const diaCheckOut = parseInt(check_out.at(2));
  const mesCheckOut = parseInt(check_out.at(1));
  const anioCheckOut = parseInt(check_out.at(0));
  if (diaCheckOut < diaActual) {
    // si el dia del checkIn es menor al dia actual, chequeo si el mes del checkIn es diferente al mes actual
    if (mesCheckOut !== mesActual) {
      // si el mes del checkIn es diferente al mes actual, chequeo si es menor al mes actual
      if (mesCheckOut < mesActual) {
        // si el mes del checkIn es menor al mes actual, chequeo si el año del checkIn es menor o igual al año actual
        if (anioCheckOut <= anioActual) {
          errors.check_out = "Dia anterior";
        }
      }

      // compruebo si el mes del checkin es mayor al mes actual
      if (mesCheckOut > mesActual) {
        // si es mayor, compruebo si el año del checkin es menor al año actual
        if (anioCheckOut < anioActual) {
          errors.check_out = "Dia anterior";
        }
      }
    }
    // si el mes del checkin es igual al mes actual es un dia anterior, porque si entro aca es porque el dia es menor.
    if (mesCheckOut === mesActual) {
      errors.check_out = "Dia anterior";
    }
  }

  if (diaCheckOut > diaActual) {
    if (mesCheckOut !== mesActual) {
      if (mesCheckOut < mesActual) {
        if (anioCheckOut <= anioActual) {
          errors.check_out = "Dia anterior";
        }
      }

      if (mesCheckOut > mesActual) {
        if (anioCheckOut < anioActual) {
          errors.check_out = "Dia anterior";
        }
      }
    }
  }

  // si el dia, mes y año del checkin son iguales al dia, mes y año actual, significa que quiere ingresar hoy
  // por lo que daria un error (tiene que ser para el dia siguiente)
  if (
    diaCheckOut <= diaCheckIn &&
    mesCheckOut <= mesCheckIn &&
    anioCheckOut <= anioCheckIn
  ) {
    errors.check_out = "Debe ser luego del dia de ingreso.";
  }

  //   if (anioCheckOut < anioActual) {
  //     errors.check_out = "Dia anterior";
  //   }

  // LIMITAR A DOS SEMANAS
  const checkInLimit = new Date(`${mesCheckIn}/${diaCheckIn}/${anioCheckIn}`);
  const checkOutLimit = new Date(
    `${mesCheckOut}/${diaCheckOut}/${anioCheckOut}`
  );

  const diferencia = Math.abs(checkOutLimit - checkInLimit);

  const dias = diferencia / (1000 * 3600 * 24);

  if (dias > 14) {
    errors.max_cant = "Limite de dos semanas.";
  }

  // comprobar que sea en el mismo año
  if (anioCheckOut > anioCheckIn) {
    errors.check_out = "Debe ser en el mismo año";
  }
  return errors;
};

export default Validation;
