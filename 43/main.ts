let magicians: string[] =["Alice", "Emaily","Eric"];
function show_magicians(magicians:string[]) : string[] {
    let show_magicians= [];
    magicians.forEach(magicians => {
        greatMagicians.push(`${magicians} the great`);
 
    });
    return greatMagicians;
}
let greatMagicians =[...magicians,"Maha"];
 // modifeid

 console.log("original magicians:" , magicians);

 console.log("great magicians:" , greatMagicians);
 
 
 