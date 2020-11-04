function Pontok()
{
    
    var tartalom=document.getElementById("tartalom").value
    var felepites=document.getElementById("felepites").value
    var eloadas=document.getElementById("eloadas").value

    var halozat=document.getElementById("halozat").value
    var programozas=document.getElementById("programozas").value
    var web=document.getElementById("web").value

    var Szössz=parseInt(tartalom)+parseInt(felepites)+parseInt(eloadas)
    var Gyössz=parseInt(halozat)+parseInt(programozas)+parseInt(web)
    var Össz=parseInt(Szössz)+parseInt(Gyössz)
    var szsz=Math.round(parseInt(Szössz)/(30*0.01))
    var gysz=Math.round(parseInt(Gyössz)/(120*0.01))
    var sz=Math.round(parseInt(Össz)/(150*0.01)) 
    document.getElementById("Szössz").innerHTML="A szóbeli vizsga összpontszáma: "+Szössz+" ("+szsz+"%)"
    document.getElementById("Gyössz").innerHTML="A gyakorlati vizsga összpontszáma: "+Gyössz+" ("+gysz+"%)"
    document.getElementById("Össz").innerHTML="A vizsga összesített pontszáma: "+Össz+" ("+szsz+"%)"

    if  (szsz<12||gysz<12||sz<25)
    {
        document.getElementById("jegyKözép").innerHTML="Osztályzat középszintű érettségi vizsga esetén: Elégtelen (1)"
    }
    else
    {
        if (sz>=25&&sz<=39)
        {
            document.getElementById("jegyKözép").innerHTML="Osztályzat középszintű érettségi vizsga esetén: Elégséges (2)"
        }
        if (sz>=40&&sz<=59)
        {
            document.getElementById("jegyKözép").innerHTML="Osztályzat középszintű érettségi vizsga esetén: Közepes (3)"
        }
        if (sz>=60&&sz<=79)
        {
            document.getElementById("jegyKözép").innerHTML="Osztályzat középszintű érettségi vizsga esetén: Jó (4)"
        }
        if (sz>=80)
        {
            document.getElementById("jegyKözép").innerHTML="Osztályzat középszintű érettségi vizsga esetén: Jeles (5)"
        }
    }


    if  (szsz<12||gysz<12||sz<25)
    {
        document.getElementById("jegyEmelt").innerHTML="Osztályzat emeltszintű érettségi vizsga esetén: Elégtelen (1)"
    }
    else
    {
        if (sz>=25&&sz<=32)
        {
            document.getElementById("jegyEmelt").innerHTML="Osztályzat középszintű érettségi vizsga esetén: Elégséges (2)"
        }
        if (sz>=33&&sz<=46)
        {
            document.getElementById("jegyEmelt").innerHTML="Osztályzat középszintű érettségi vizsga esetén: Közepes (3)"
        }
        if (sz>=47&&sz<=59)
        {
            document.getElementById("jegyEmelt").innerHTML="Osztályzat középszintű érettségi vizsga esetén: Jó (4)"
        }
        if (sz>=60)
        {
            document.getElementById("jegyEmelt").innerHTML="Osztályzat középszintű érettségi vizsga esetén: Jeles (5)"
        }
    }

  
}
