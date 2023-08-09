import './App.css';
import { useEffect, useRef } from 'react';

function Node({left="", right=""}){
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      leftLeafRef.current.style.top = (400 - document.documentElement.scrollTop) + 'px';
    })
  })
  
  const leftLeafRef = useRef(null);
  
  return (
    <div class="node">
      <div ref={leftLeafRef} class="leftLeaf">{left} {left===""?"":"---"} </div>
      <div class="stem">&nbsp;</div>
      <div class="rightLeaf">{right===""?"":"---"} {right}</div>
    </div>    
  );
}

function App() {
  return (
    <>
      <Node
        left="Hello"
        />
      <Node
        right="World"
      />
      <Node/>
      <Node/>
      <Node
        right="Hello"
      />
      <Node
        right="World"
      />
      <Node
        right="good"
      />
      <Node
        right="New"
      />
      <Node />
      <Node
        left="Hello"
        />
      <Node
        right="World"
      />
      <Node/>
      <Node/>
      <Node
        right="Hello"
      />
      <Node
        right="World"
      />
      <Node
        right="good"
      />
      <Node
        right="New"
      />
      <Node />
      <Node
        left="Hello"
        />
      <Node
        right="World"
      />
      <Node/>
      <Node/>
      <Node
        right="Hello"
      />
      <Node
        right="World"
      />
      <Node
        right="good"
      />
      <Node
        right="New"
      />
      <Node />
      <Node
        left="Hello"
        />
      <Node
        right="World"
      />
      <Node/>
      <Node/>
      <Node
        right="Hello"
      />
      <Node
        right="World"
      />
      <Node
        right="good"
      />
      <Node
        right="New"
      />
      <Node />
      <Node
        left="Hello"
        />
      <Node
        right="World"
      />
      <Node/>
      <Node/>
      <Node
        right="Hello"
      />
      <Node
        right="World"
      />
      <Node
        right="good"
      />
      <Node
        right="New"
      />
      <Node />
      <Node
        left="Hello"
        />
      <Node
        right="World"
      />
      <Node/>
      <Node/>
      <Node
        right="Hello"
      />
      <Node
        right="World"
      />
      <Node
        right="good"
      />
      <Node
        right="New"
      />
      <Node />
      <Node
        left="Hello"
        />
      <Node
        right="World"
      />
      <Node/>
      <Node/>
      <Node
        right="Hello"
      />
      <Node
        right="World"
      />
      <Node
        right="good"
      />
      <Node
        right="New"
      />
      <Node />
      <Node
        left="Hello"
        />
      <Node
        right="World"
      />
      <Node/>
      <Node/>
      <Node
        right="Hello"
      />
      <Node
        right="World"
      />
      <Node
        right="good"
      />
      <Node
        right="New"
      />
      <Node />
      <Node
        left="Hello"
        />
      <Node
        right="World"
      />
      <Node/>
      <Node/>
      <Node
        right="Hello"
      />
      <Node
        right="World"
      />
      <Node
        right="good"
      />
      <Node
        right="New"
      />
      <Node />
      <Node
        left="Hello"
        />
      <Node
        right="World"
      />
      <Node/>
      <Node/>
      <Node
        right="Hello"
      />
      <Node
        right="World"
      />
      <Node
        right="good"
      />
      <Node
        right="New"
      />
      <Node />

    </>
  );
}

export default App;
