const { Builder, By, Key, until, Button } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { Type } = require('selenium-webdriver/lib/logging');

async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    // Navegar a una página web
    await driver.get('http://www.google.com');

    // Encontrar el campo de búsqueda por nombre
    let searchBox = await driver.findElement(By.name('q'));

    // Escribir en el campo de búsqueda
    await searchBox.sendKeys('Selenium', Key.RETURN);

    // Esperar a que la página muestre los resultados
    await driver.wait(until.titleIs('Selenium - Buscar con Google'), 1000);


    //navegar por mi web
    await driver.get('http://localhost:8080/');
    // Encontrar el a 
    let link = await driver.findElement(By.linkText('Comenzar'));
    // esperar unos segundos
    await driver.sleep(3000);
    //scrollea
    await driver.executeScript("window.scrollTo(0, 500)");
    //esperar unos segundos
    await driver.sleep(3000);
    //scrollea hasta arriba
    await driver.executeScript("window.scrollTo(0, 0)");
    //esperar unos segundos
    await driver.sleep(3000);
    // Click en el a
    await link.click();
    // Esperar unos segundos
    await driver.sleep(3000);
    //scroll
    await driver.executeScript("window.scrollTo(0, 500)");
    //esperar unos segundos
    await driver.sleep(3000);
    // Encuentra el botón 
    let button = await driver.findElement(By.xpath("//button[contains(text(), 'Iniciar sesión')]"));
    // Hacer clic en el botón
    await button.click();
    //esperar unos segundos
    await driver.sleep(3000);
    // input email
    let email = await driver.findElement(By.name('email'));
    // escribir en el input
    await email.sendKeys('test@gmail.com');
    // input password
    let password = await driver.findElement(By.name('password'));
    // escribir en el input
    await password.sendKeys('123456');
    //esperar unos segundos
    await driver.sleep(3000);
    //click en el a Login
    let login = await driver.findElement(By.linkText('Login'));
    await login.click();
    //esperar unos segundos
    await driver.sleep(3000);
    // click en a productos
    link = await driver.findElement(By.linkText('Productos'));
    await link.click();
    //esperar unos segundos
    await driver.sleep(3000);
    // volvemos
    await driver.navigate().back();
    //esperar unos segundos
    await driver.sleep(3000);
    // click en a Ventas
    link = await driver.findElement(By.linkText('Ventas'));
    await link.click();
    //esperar unos segundos
    await driver.sleep(3000);
    // volvemos
    await driver.navigate().back();
    //esperar unos segundos
    await driver.sleep(3000);
    // click en a Pedidos
    link = await driver.findElement(By.linkText('Pedidos'));
    await link.click();
    //esperar unos segundos
    await driver.sleep(3000);
    // volvemos
    await driver.navigate().back();
    //esperar unos segundos
    await driver.sleep(3000);

  } finally {
    // Cerrar el navegador
    await driver.quit();
  }

    console.log('Test finalizado');

}

example();
