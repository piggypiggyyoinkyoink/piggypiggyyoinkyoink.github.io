document.getElementById("dnc").addEventListener("click", ()=>{
    links = [
        "https://youtu.be/dQw4w9WgXcQ?si=SYlUnb8YDF49lmXN",
        "https://youtu.be/iXeyEzsycF4?si=GBARh68jEnQux8ou", 
        "https://youtu.be/jl0JGChm5cI?si=G9kv9MF01vLTqvqT", 
        "https://youtu.be/Zo_QeYg1uf8?si=P8IoBKtBJJNwzm8n", 
        "https://youtu.be/Jyx2c1IADhY?si=SpWjL7SDTmbHG6T9", 
        "https://youtu.be/v1K4EAXe2oo?si=Llja82VoFy0FB9Li", 
        "https://youtu.be/4JX04Pw_lgQ?si=p1jpuUXiu5EF8C7R", 
        "https://youtu.be/FMesMpOVYZE?si=b2SDxIEnL7n3JcSK", 
        "https://youtu.be/QLuunNFxw5g?si=ONUy6ETUVkVSUGWb", 
        "https://youtu.be/bQEmB8Nezwo?si=AH3329BshlbichUO", 
        "https://youtu.be/cwI4ULzau7w?si=UmdkMU3_tIpS4dK5", 
        "https://youtu.be/k7EAVK3bAGg?si=uReTJ4-N2qBtEt33", 
        "https://youtu.be/AqtXtnUGPiA?si=_XCmLHPbFBNiEw2G"
    ];
    let url = links[Math.floor(Math.random()*links.length)];
    window.location.href = url;
}); 
