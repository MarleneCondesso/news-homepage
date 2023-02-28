
[Study] -> (https://developer.mozilla.org/en-US/docs/Web/CSS/)

- Este código css permite definir a distancia entre os elementos dentro do nav:
```html
<nav>
    <a href="#">Home</a>
    <a href="#">New</a>
    <a href="#">Popular</a>
    <a href="#">Trending</a>
    <a href="#">Categories</a>
</nav>
```
```css
nav{
    display:flex;
    gap:4%;
}
``` 
- Este código css permite alterar o estilo de um elemente especifico dentro de outro sem necessitar de criação de 'class'
```html
<nav>
    <a href="#">Home</a>
    <a href="#">New</a>
    <a href="#">Popular</a>
    <a href="#">Trending</a>
    <a href="#">Categories</a>
</nav>
```
```css
nav a{
    font-size: 0.9rem;
    font-weight: 400;
    text-decoration: none;
    color: hsl(236, 13%, 42%);
}
```

```css
img{

    object-fit: cover; /*Permite redimensionar a imagem no tamanho definido*/
}
article{ /*Contexto responsivo*/
    display: grid; /*define o article como uma tabela, permite facilitar o manuseamento de cada elemento*/
    grid-template-columns: 1fr 1fr; /*Define o espacamento entre as colunas, neste caso, ambas as colunas têm o mesmo valor, 1fr */
    grid-gap: 3%; /*Define a distância entre cada coluna na tabela*/
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));/*
    repeat- permite repetir o número de colunas. 

    auto-fill- permite ajudar a agrupar os elementos nas colunas, caso os elementos não tenham dimensão para as mesmas.

    minmax- permite definir o tamanho minino 

    ex:. 
    repeat(2 (colunas), minmax(340px(tamanho minimo), 1fr(despacamento entre as colunas))).
    */
    grid-column: span 2; /*Permite definir quantas colunas ocupara, span permite definir o posicionamente, neste caso posiciona-se nas duas colunas*/
}

```css
aside div:last-child{
    border: none; /*'last child' -> permite realizar alterações no último elemento se um seguimento de elementos iguais*/
}
```
- Definir o menu lateral
```css
nav{
    position: fixed; 
    /*Definir o posicionamento do elemento na pagina, neste caso posicionamento fixo, o que poermite ao elemento manter-se na mesma posição independentemente do utilizador usar scrolling*/    
    top: 0;
    /*Complemento à posição - posicionamento do elemento a uma distância de 0 do top da página*/
    right: 0;
    /*Complemento à posição - posicionamento do elemento a uma distância de 0 do top da página*/
    transform: translateX(256px);
    /*permite manusear o elemento de qualquer forma, neste caso estamos a esconder o elemento.
    translateX -> corresponde ao posicionamento do elemento na horizontal
    translateY -> corresponde ao posicionamento do elemento na vertical
    translate(X,Y) -> caso queiramos alterar o posicionamento nas duas vertentes, usamos translate(X,Y)*/

}
        
```