import Banana from '../asstes/banana_svg.svg'
import Brocolli from '../asstes/brocolli_svg.svg'
import Avocado from '../asstes/avacado_svg.svg'
import Carrot from '../asstes/carrot_svg.svg'
import Corn from '../asstes/corn_svg.svg'
import Orange from '../asstes/orange_svg.svg'
import Pepper from '../asstes/pepper_svg.svg'
import Redish from '../asstes/redish_svg.svg'
import Tomato from '../asstes/tomato_svg.svg'

export default helperSvg=(name,width=100,height=150)=>{
    if(name=='Brocolli'){
        return <Brocolli height={height} width={width}/>
    }
    else if(name=='Gedang'){
        return <Banana height={height} width={width}/>
    }
    else if(name=='Avocado'){
        return <Avocado height={height} width={width}/>
    }
    else if(name=='Carrot'){
        return <Carrot height={height} width={width} />
    }
    else if(name=='Corn'){
        return <Corn height={height} width={width}/>
    }
    else if(name=='Orange'){
        return <Orange height={height} width={width}/>
    }
    else if(name=='Pepper'){
        return <Pepper height={height} width={width}/>
    }
    else if(name=='Radish'){
        return <Redish height={height} width={width}/>
    }
    else if(name=='Tomatoes'){
        return <Tomato height={height} width={width}/>
    }
}