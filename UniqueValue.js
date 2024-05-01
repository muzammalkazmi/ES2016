// returns unique values and hide repeating values

const menu = [
    {item: "Biryani",
      category: "rice"
    },
      {item: "Qorma",
      category: "Salan"
    },
      {item: "Plao",
      category: "rice"
    },
      {item: "Karahi",
      category: "Salan"
    },
      {item: "Fried Rice",
      category: "rice"
    },
      {item: "Mix vegitable",
      category: "Salan"
    },
      {item: "Shahi Daal",
      category: "Salan"
    }
    ]
    
    const uniqueValue = new Set( menu.map(({category})=> `we have items in ${category}`))
    console.log(uniqueValue)

    // Answer is

    // Set(2) { 'we have items in rice', 'we have items in Salan' }