function ocultar(menu)
{
    vista=document.getElementById(menu).style.display;
    if (vista=='none')
    vista='block';
    else
    vista='none';
    vista=document.getElementById(menu).style.display = vista;
}
