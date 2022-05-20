function CalcularPrecioCondescuento(){
    const precio =document.getElementById("Inputprice");
    const descuento =document.getElementById("InputDiscount")

    const preciover=precio.value
    const descuentover=descuento.value

    const porcentajecondescuento =100-descuentover
    const preciocondescuento =(preciover*porcentajecondescuento)/100

        
    document.getElementById("DivContenedor").innerHTML=(preciocondescuento)

}