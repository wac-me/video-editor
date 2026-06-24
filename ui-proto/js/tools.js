function updateTools(type){


    const tools =
    document.querySelector(".tools");


    if(!tools) return;



    if(type==="video"){


        tools.innerHTML = `

        <button class="tool-btn">

            <i data-icon="speed"></i>

            <span>Speed</span>

        </button>


        <button class="tool-btn">

            <i data-icon="adjust"></i>

            <span>Adjust</span>

        </button>


        <button class="tool-btn">

            <i data-icon="fx"></i>

            <span>FX</span>

        </button>

        `;

    }




    if(type==="text"){


        tools.innerHTML = `

        <button class="tool-btn">

            <i data-icon="color"></i>

            <span>Color</span>

        </button>


        <button class="tool-btn">

            <i data-icon="font"></i>

            <span>Font</span>

        </button>


        <button class="tool-btn">

            <i data-icon="fx"></i>

            <span>FX</span>

        </button>

        `;


    }




    if(type==="audio"){


        tools.innerHTML = `

        <button class="tool-btn">

            <i data-icon="volume"></i>

            <span>Volume</span>

        </button>


        <button class="tool-btn">

            <i data-icon="fade"></i>

            <span>Fade</span>

        </button>


        <button class="tool-btn">

            <i data-icon="fx"></i>

            <span>FX</span>

        </button>

        `;


    }



    initIcons();

}
