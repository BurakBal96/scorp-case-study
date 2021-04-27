import React, {useEffect} from 'react'
import {observer} from 'mobx-react'
import {useStores} from '../../utils/stores'

export const Landing = observer(() => {
  const {UIStore} =useStores()

  useEffect(()=>{
    UIStore.setCurrentPage("Home")
  }, [UIStore])

  return (
    <div className="per-100 vertical center mb-40 p-20">
      <h3>Title</h3>

      <p>
        Scorp, Videolu Sözlük formatında ortaya çıkan bir sosyal medya
        uygulamasıdır. Toplumun herhangi bir konu hakkında
        (gündem,spor,yemek,moda vs.) fikir ve düşüncelerini beyan ettikleri 15
        saniyelik mikro video platformudur.Bütün mobillerden indirilebilir.
      </p>

      <p>
        Scorp is a social media application that emerged in the Videolu Sözlük
        format. It is a 15-second micro video platform where the public express
        their opinions and thoughts on any subject (agenda, sports, food,
        fashion, etc.). It can be downloaded from all mobile.
      </p>

      <p>
        Dictumst commodo elementum fermentum eget morbi etiam eros molestie.
        Posuere blandit interdum dapibus fames ullamcorper, purus rhoncus morbi!
        Dictumst hac eleifend, nascetur erat. Pharetra, ultrices curae; dictum.
        Tempor nisi elit, metus praesent vestibulum vestibulum? Arcu consequat
        rhoncus erat rhoncus convallis. Nullam nec vel primis maecenas platea.
        Tortor pellentesque montes pulvinar curabitur netus ridiculus sit
        parturient dolor phasellus vel. Varius pellentesque aliquet fermentum ut
        platea penatibus. Facilisis ridiculus urna elit primis condimentum
        curabitur tellus.
      </p>
      <p>
        Laoreet proin taciti metus et risus porttitor vitae. Ad amet porta leo
        netus aptent tempus taciti diam potenti varius sollicitudin? Aenean
        maecenas viverra donec, per cursus nulla nisl conubia! Vehicula hac
        vitae tristique dapibus montes ultrices. Eleifend quisque ridiculus orci
        quisque in aliquam adipiscing vestibulum. Vitae malesuada nam urna
        parturient. Semper elementum taciti rutrum sagittis taciti dis ligula
        auctor dolor laoreet. Feugiat eu mi suspendisse montes mattis posuere.
      </p>
      <p>
        Proin natoque posuere nunc lectus est eleifend maecenas urna purus
        dictum dapibus proin. Donec semper urna et mi imperdiet vehicula augue
        sociosqu mollis malesuada litora. Etiam erat leo tincidunt facilisis
        hendrerit enim venenatis. Porttitor pellentesque, aliquam torquent.
        Congue risus vel turpis nec vehicula libero sem mollis nisl! Vestibulum
        aliquet metus habitant ante ante aptent nisl mi!
      </p>
      <p>
        Eget porta sagittis facilisi euismod rhoncus dolor. Integer ut fermentum
        luctus pulvinar urna! Augue facilisis cubilia litora. Nec mollis conubia
        eget gravida quis condimentum tempus! Praesent magnis orci quam at
        netus. Hendrerit conubia nascetur dictum venenatis sagittis cursus.
        Sodales himenaeos proin augue curabitur nulla metus netus mi justo. Cum
        habitant habitant lacinia dignissim taciti feugiat massa hac. Velit,
        ultricies hac at. Neque vehicula duis integer lacinia ridiculus non
        congue dictumst velit, class faucibus nullam. Luctus pulvinar suscipit
        pretium porttitor vitae facilisis dui. Eget ipsum massa egestas mauris
        venenatis lacus sodales hac. Turpis tortor imperdiet.
      </p>
      <p>
        Auctor nulla litora pulvinar mattis! Nostra erat dictum cubilia turpis
        blandit metus fames faucibus convallis maecenas primis. Ultricies
        convallis tempus nulla fusce dolor. Porttitor enim vitae eget suscipit
        laoreet hendrerit suscipit pharetra facilisis odio! Erat nunc urna
        tempus hac euismod, tempor faucibus inceptos risus nam venenatis
        nascetur! Eleifend interdum nunc hendrerit libero litora suscipit
        turpis. Sodales conubia elit aptent feugiat dapibus vivamus hac fusce
        mus cubilia phasellus. Integer justo.
      </p>
      <p>
        Orci mollis sapien ipsum, nascetur himenaeos. Vehicula consequat
        consectetur platea vel dis consectetur himenaeos quisque nunc viverra.
        Vivamus nulla a aliquam tempus magna est fermentum. Praesent nascetur
        tempus feugiat nulla habitasse elementum curae; nisl nec. Nec congue,
        arcu fusce nunc hac dictumst purus. Et condimentum suspendisse tempor mi
        quis? Dui vivamus vehicula nunc netus vel! Odio mus rhoncus erat
        scelerisque vestibulum. Neque ultrices erat dignissim, elementum
        dictumst nibh venenatis dui? Lorem sed mollis ullamcorper, nullam
        inceptos tempor vestibulum. Praesent lacus id tellus tortor facilisis
        habitant.
      </p>
      <p>
        Lectus tristique magna nullam malesuada. At pretium quisque ultrices a
        at lorem ullamcorper at. Molestie mattis conubia at nam maecenas semper.
        Odio, placerat et luctus volutpat dolor nulla pulvinar. Curabitur
        consectetur fames vehicula tortor tempor tellus ullamcorper velit eget
        netus sagittis dictumst. Proin fringilla consequat natoque, bibendum
        sociosqu consequat. Conubia tempor bibendum commodo augue fringilla.
        Ridiculus vulputate est dui ullamcorper potenti diam magna. Potenti
        ornare rutrum lorem velit tortor. Vulputate per eros turpis consequat;
        penatibus eros congue a pharetra sodales! Diam sociosqu, tempor pulvinar
        mauris. Nisl conubia cursus orci morbi volutpat accumsan.
      </p>
      <p>
        Dapibus dignissim massa condimentum praesent, per orci urna felis
        quisque cubilia semper pellentesque. Potenti cubilia nulla vel vehicula
        nulla sed sollicitudin eleifend conubia nunc fames suscipit. Netus felis
        cum cum iaculis posuere, arcu felis. Aliquet dignissim habitant, metus
        commodo maecenas. Dis orci conubia metus congue proin quisque dolor.
        Pulvinar vestibulum velit sed? Fames, dui hendrerit sed. Lectus,
        praesent vulputate a senectus phasellus blandit neque vulputate nullam
        aptent laoreet phasellus. Velit dictumst magna eros, elit ac.
      </p>
      <p>
        Sagittis duis sociis volutpat proin enim. Potenti eget duis lobortis
        quis. Dapibus urna consectetur nam a nullam nullam. Ornare, volutpat
        aliquet cubilia urna imperdiet sociis cubilia penatibus tellus tempus
        tempus hac. Dui, arcu facilisis cubilia non porttitor! Sociis ligula
        sagittis; laoreet at ad odio. Parturient fringilla mattis amet ridiculus
        euismod habitant elit senectus integer auctor torquent vitae. Id
        vestibulum ac condimentum? Taciti dolor cubilia sodales libero ac amet
        eleifend. Tellus justo curabitur quis ante aenean morbi. Magnis.
      </p>
      <p>
        Feugiat habitasse nisl cum diam. Nostra netus vel ut consectetur nullam
        nascetur nascetur luctus. Malesuada nunc tellus, ad magna quisque mattis
        facilisis. Accumsan nibh ut purus. Mattis amet vulputate feugiat non
        consequat a. Orci amet vestibulum, lacinia nibh tristique malesuada
        taciti a posuere. Sodales phasellus neque blandit elementum eu. Quam
        suspendisse enim ipsum aptent! Scelerisque?
      </p>
      <p>
        Magna purus id senectus fermentum diam sit pharetra. Lacus nam imperdiet
        aliquet, posuere laoreet dapibus feugiat ut. Nunc scelerisque semper dui
        posuere egestas. Eu mattis sagittis donec fusce sociis nullam. Etiam
        mollis platea curae; vitae. Tellus at himenaeos felis leo. Et cubilia
        aliquet hac in tempor justo. Amet, sodales tincidunt quisque. Nullam
        vivamus habitasse.
      </p>
      <p>
        Semper ultricies, a condimentum habitant fermentum interdum facilisi
        ullamcorper magna est condimentum. Curae;, penatibus et ullamcorper
        enim. Arcu venenatis lacus pretium, imperdiet porta volutpat. Euismod
        egestas primis curabitur eget vivamus, ante porttitor. Sollicitudin ac
        vulputate scelerisque urna mi odio. Donec tempus primis lobortis netus
        magnis ligula etiam montes magnis nulla. Porta senectus at at torquent.
        Tempor nisl laoreet ac in porttitor himenaeos vitae mauris tellus
        facilisi accumsan posuere. Tempus eleifend posuere erat mus nisl
        lobortis metus fringilla natoque. Dolor vel mi.
      </p>
      <p>
        Condimentum ridiculus inceptos a fringilla rutrum sociosqu tristique
        turpis interdum tristique. Condimentum curae; adipiscing curae; tortor
        ligula mi netus vulputate leo rhoncus dapibus. Neque aliquam lorem nunc
        faucibus tincidunt orci. Sociosqu sit cubilia sapien vitae orci per
        integer pulvinar lacinia diam euismod! Hendrerit primis volutpat pretium
        vitae odio ut tincidunt! Congue lorem aenean tellus ultrices curae;.
        Blandit.
      </p>
      <p>
        Platea lacus mattis urna mauris suspendisse fringilla tempor felis.
        Vivamus lacus enim consectetur ad! Habitant sollicitudin tortor mollis
        faucibus dictum laoreet metus. Leo nulla eros magnis iaculis fames et.
        Cubilia curae; fermentum laoreet habitasse facilisi tortor vitae! Eros
        consectetur aliquet mauris eleifend nullam fusce quisque vestibulum dis
        sit sem. Mattis, tincidunt at accumsan ridiculus. Class vivamus sagittis
        tincidunt neque justo. Condimentum suspendisse!
      </p>
      <p>
        Nunc enim ridiculus mus ornare senectus. Suspendisse leo nec molestie,
        parturient consequat dapibus etiam luctus. Pretium ornare tortor sed.
        Habitasse vulputate ante suspendisse. Potenti ridiculus pretium pretium
        mattis, varius lobortis tristique facilisi potenti primis. Class magna
        condimentum urna leo tempus sapien vivamus conubia cursus enim platea
        vitae. Iaculis pulvinar donec sed orci, integer litora penatibus.
        Suscipit interdum iaculis cubilia eros commodo. Vitae nec tempor dolor
        elit auctor netus fringilla vel.
      </p>
    </div>
  )
})
