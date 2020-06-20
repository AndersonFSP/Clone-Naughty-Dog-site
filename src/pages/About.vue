<template>
  <div class="q-pa-md">
      <div class="row">
        <div class="col-md-7 offset-md-1 col-xs-12">
            <TitleSpace titulo="about"/>
            <div>
                   <p> Established in 1984, Naughty Dog is one of the most successful and prolific game 
                       development studios in the world and a flagship
                    first-party studio within PlayStation’s Worldwide Studios group. From creating the iconic 
                    Crash Bandicoot and Jak and Daxter series to modern franchises like Uncharted and 
                    The Last of Us, Naughty Dog is responsible for some of the most critically acclaimed and 
                    commercially successful games on Sony’s PlayStation platforms. 
                    Through its use of cutting-edge technology and evocative, character-driven storytelling, 
                    Naughty Dog has received hundreds of industry and media awards, while developing a 
                    passionate 
                    fan base of millions of players around the globe.
                    </p>
                    <p>Naughty Dog’s recent releases include 2016’s Uncharted 4: A Thief’s End, winner of numerous 
                    Game of the Year awards, and 2017’s Uncharted: The Lost Legacy—a new standalone adventure in 
                    the Uncharted series. By December 2017, total global sales for the Uncharted franchise surpassed
                    41.7 million copies sold.
                    </p> 
                    <p>Currently, Naughty Dog is developing The Last of Us Part II, the much-anticipated sequel to 2013’s The Last of Us.
                        Naughty Dog is a wholly-owned subsidiary of Sony Interactive Entertainment located in Santa Monica, California. For more information, follow us on Twitter, Facebook, or Instagram.
                    </p> 
            </div>
        </div>
        <div class="col-md-3 offset-md-1 col-xs-12">
            <CardFoto :vertical="true"  foto="https://s3.us-east-1.amazonaws.com/nd.images/uploads/careers_1x1.png"/>
            <CardFoto :vertical="true"  foto="https://s3.us-east-1.amazonaws.com/nd.images/uploads/utll_now_1x1.png"/>
        </div>
      </div>
  </div>
</template>

<script>
import TitleSpace from 'components/Titulo/TitleSpace';
import CardFoto from 'components/Cards/assist/CardFoto';

export default {
    components:{
        TitleSpace,
        CardFoto
    }
}
</script>

<style>

</style>