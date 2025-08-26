const clueData = {
    '1': {
        password: "Bhasker-Bhaskar",
        redirect: "https://drive.google.com/file/d/1LgXXA5Zo4s4aioFuVP45KI9sN68QQbmp/view?usp=share_link"
    },
    '2': {
        password: "everything",
        redirect: "https://drive.google.com/file/d/1SgVb8q-Q31GWq7NU_hH5RwOIRefVubDV/view?usp=share_link"
    },
    '3': {
        password: "2023A3IS0130G",
        redirect: "https://drive.google.com/file/d/15kZ7cqBMxBTp5lWnIx9sq7Nr01uEoRU8/view?usp=share_link"
    },
    '4': {
        password: "Jenny",
        redirect: "https://drive.google.com/file/d/1rPLjiZtZSOANy9gaZVFsQxtDGOFn2-vP/view?usp=share_link"
    },
    '5': {
        password: "Tilak",
        redirect: "https://drive.google.com/file/d/13gqLNWxG5cb6gOKe8NvsS-NMWKz7tKcM/view?usp=share_link"
    },
    '6': {
        password: "Geronimo",
        redirect: "https://docs.google.com/document/d/1HpNCzKUhvTXrmsotys_Oaql_gCzOgzbhxDI79VRyPGI/edit?usp=sharing"
    }
};

function checkPassword(event) {
    
    const clickedButton = event.target;
    
    const clueId = clickedButton.dataset.clue;

    
    const correctPassword = clueData[clueId].password;
    const redirectUrl = clueData[clueId].redirect;

    
    const userInput = prompt(`Enter the password for Clue ${clueId}:`);

    
    if (userInput === null) {
        return;
    }

    
    if (userInput.toLowerCase() === correctPassword) {
        
        alert("Correct! Taking you to the next step...");
        window.location.href = redirectUrl;
    } else {
        
        alert("Wrong, thodi si restarted hai kya?");
    }
}


const clueButtons = document.querySelectorAll('.clue-btn');


clueButtons.forEach(button => {
    button.addEventListener('click', checkPassword);
});
