const state = {
    slides: [
        { 
          name: 'first',
          foto: 'https://s3.us-east-1.amazonaws.com/nd.images/uploads/d20200401_T2_BlogHeader_16x9.jpg',
          title: 'Watch the new the last of us part 2 story trailer',
          subtitle: 'Montains'
        },
         { 
          name: 'second',
          foto: 'https://s3.us-east-1.amazonaws.com/nd.images/uploads/ellie-hi-res.jpg',
          title: 'Second Stop',
          subtitle: 'Famous City'
        },
        { 
          name: 'third',
          foto: 'https://s3.us-east-1.amazonaws.com/nd.images/uploads/TLOUPII_NARRATIVE_STILL_14.jpg',
          title: 'Third Stop',
          subtitle: 'Famous Bridge'
        },
         { 
          name: 'Four',
          foto: 'https://sm.ign.com/ign_br/screenshot/default/the-last-of-us-ellie-ps4-theme-light_75b1.jpg',
          title: 'Third Stop',
          subtitle: 'Famous Bridge'
        },
      ],
      cards:[
        {
          id: '1',
          foto: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUQEBIVFRUWFRAWDw8VDxUPFRUQFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFy0dHx0tLS0tLS0tKy0rLS0tNy0tLS0tLS0tLSstLS0tKystLS0tLS0tKy0tLS0tLS0rLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAABAgADBAUGB//EADgQAAICAAQDBQYEBQUBAAAAAAABAhEDBCExEkFRBWFxgZEiMqGxwfAT0eHxQlJicpIGFCOCohX/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAeEQEBAAICAwEBAAAAAAAAAAAAAQIRITEDEkEiE//aAAwDAQACEQMRAD8A+K2SwEACQAUAFBFCBLIjJlaGsCWxZogzGmXYcxlYukjPmY+yzVEOJh2mmNO3CIW5jBcXXoVEtUGQoyAGIQKQgA0e4sy+C5y4V5vojt5PKRi9rpbvq/0+ZUx2VumLJ9lylrN8MfjR1sDJR92CqP8AE370l0LoQb3/AE8vzN2DS0NccYzyyo4WCl+SNEaXLw6ISBHPXU0ZnlbTTqnK1pelJU/OzzPbeC1KKr+bh7+6z0stVRz8zGWLCCSUeKpW/alGmmq+JOXKseHmIdPgWyg64ly0muafJ/fQ2ZvKq62l/C1te6T8hHH8pffozPTTbJJNC8Sf16ehr3Wvg19Tn4sGnzFTh5Rrw8E6Iq+4yKo4zQfxVzJNqw2r0T8f32N2DPhVyr+mO7bOTDErb5G3LYUpO5bcypU5R6nsX/S2LncOUozgnHVQlKnJ8kjxXaGXlh4k8OaqUZSUl3pnpn2rPDX/AB2u/ZUed7TxXPEcpbvWT72GehjjZyx0SgkMzKAJBmhAgAIFCjIAYJEQAhZBlQ8QJrw5DuRmjIdyGnTNn9aMR0JamLEjTEuEDYAgYotw8Ny0j59BIo6eTikvvcIK0ZTA4I0q195m3LQ5ve7Zm30+6NUNDWIrVFl+FIxyntzvvouw2VEWNkZPwJXcLBaFsf30KSNac/mLF9/7kt66fy1rWjer8gx1vTm6dVpf0AMfaGDxLv5eP3ZxpTadPfk+q+9fM9A8G5OTe20Vy731fyOP2the1F1ymn4ojKfVY34r4+NU0rrfrXhzM08M35HDTjda6q+77Y0ssxa2qcOBi4XNMXDh1OpnMm47beFHLxItutiLNLlbcGMYrieu2uirwbOjkXCf8SSXK/uzHm8vFqGHBtxjrNvTil6vRL5sb/5ns8UWV0nt6OWTWJhSca9hJ/8AW6f0PH9oxqbR6DsHNSjGUXzjKL+f0Rwu13/yy8RZWXk5LOGMgAmYJZAEGoSEIBAEAQCxDUVotiMqRoKCwCB0xrEQwypWZ8XUvmV0I4zJBSHUGMo0C4OHE3YD0MkImjDg0EFdLBj995fhswZab2NkWaSs7GjWn4D4MwZafIENJUyib8OQ/wCKuvOt+en6GWMtS/DasraLFWTzGJJ3KCUeKkrt1UmnLkv4Nr39NMJ7U7SW933epMScU0m/edLfem/LZ6mbJYWHgRcForv3uJt9fgMNzdI5HbkHSa6rXxVfRGnE7Tgtn6ow9oZ2M4Ut7TXk7+gsrLBjLKs7LXsX4v79DfGKrx9TidmZlpuF6NJrxelfD5nZhO9CcbwrKcq8TCeI1GvyT+7MOb7GcbqOq1lpsuvh+R6HLYscP2purcV/k0l8Wjq40ISjpXFwzdp9NHtyez/Q0mEyjO53GvnmD+6N2WnScdbey+ZgxNJyXRy+ZfgYr359TGVvXRqMNE76tanl8zicUm+rZ35tKL6s8/jwp6k5BWQDAQACREGpEGiIIEFEQSUAQeLBQyQyokSDQQLZQ2FiNgEZEgIMp0IycxMSL5Ei9bJJgqEU2XYebaKIvqTEXQDboZ5c0bsDORfM4abdXy20GcddPJj2Wtu9gY9T300NGPjcMrezPP4WIzrQf4kUqb225FS7KzXLVLORWtlE+2Ix21Zmx+zJ1bemu6o57wXtXwC2wpJW7H7blL9zLLPN7v4kw8o308LNEuzV1ja3TlQuafEZ5TpKUk0pXwyp1KnTp89S7Ax4bLf0NWX7NwnX4k6St8Mbm30SdUle/wA9Rp5aLuUVwpLut98q5j9aXsrVezS9rijwtLWtL8vzPQZVbv7RxMpC8WN7RjOfjVKvU9HCSTa26L6l4JzW4ctqV6rTwd/mdfChw4Wir2v/ADN21fn8ORy8sqql4ffmdXP4lYEpfyqTT20UWzbFhn3I+d42IniTfVyfxZMKW3mUwpt2Jiz10OXbrsbXJvUz5jC4l3obKYl6PyNmXyzm6QSbTbpwGgUdnH7Bxm24xvwME+z8VOnhy/xYrhlPiZnjeqxhBQRNEQyREggQpDJCphTAjIYSwWMtHbJxFbkRAeljZXJhBQgaIHhlkIhkhltnxNBWNONpv0EgxVcBxBwF+HCzZhZVBIpzeElHX/2CeoryER+tLcc3DWp6LsjB6uu45cMJKXxO9kZrRNDwnKc+mqWTW7be+nJeXl8+8fEymH+HK1TTi+PThSV8Sb6behtk06rz8Wv1NfZzqadXr/Lxbrnemx0zGbc2V4eNzWTduPC78Krx7zEsGd8Kd1W/Tlqe/wC1sspybWH7zT0mpRaqk1q6dw23vWtTh4uWqXDS03WzXPyM8/HqtcPJuOPgZWe8mklv4Vz6foa8bLR/CfTe9Vtr6aG2GGlrJNK3aaWutJvu+jMfbOZ4YcLSuUqdK1159wtSQ921k7Ptzv8ApjF661NuT+TOw8RL0VePQ4PZybmmqq5SfXRSil/6fodRz5ky8Ksb8tjNtL15a8zodvTrLT/sf+U5KC8t/U5/Z61vfXT4q/iH/WeY4cJQvWTTr+mC39ZGs4xtZZc5SPA8TtmqC38DLirW+powpfI5m67LT1XjXqdbJYjUl4nIyr1PT9kwh7M3yl7XPQ08c3Wfluo7OUztcjpYfaEK1icHtjhhiVF76o0YElwq2rPQxzsunnZYSzb5ukEhLPLeoILAQAKHQiQwAzAQKQEUZINBoAFDQiShojKrUhcRaBTI9RkpxFoZmqZthG3QM7BUqD1OVmhKmdDLYpz1qi3BnRM4adutHEKsxPmVrEKc7i2VamQixjv5LWK8meYgeo7KnSS8Aw7PPp2uBqKbW9pXS25Axc3w89eXPa6Nmc4eDDnCqanxaPTVJerUq8LOX+CpXe302Oi3V1HPjPabrRlc+lpF89eSl/d11EzEFK2l7zi5uL4HS2em+23ecHtPBlgyU4XT3jehbku009Xv9Of09Cf6fKr+euY6/Em/Wmc7tXLqcGlo9HfWuRdLHvVehRj4ujTp8pLfyFeTnDnZaCUq6KvJm1M5OWm+LX+30pHSy8rk6e2j8WkyIuuzk1SVdUvjyOJ/rXNp4ign7kUvGT1f09Dqf7rgimuW/kuXrfkeN7Rx+OUpSerk36srO/nScZ+tq8QOCxWDCZi0aMHc2RzE40ouu+6RghI35dJrXuHj2WXRsbNzm05SbrnozZhZ+aVWvM5mLJbLrR0ctGPCtEaze+2WWtdODRKChqMmqugpD0ShAKJQ6QaAiIKG4ScIwBLJQKADYbFFxJUAPLFoXEzOlIzWKGz02YePSK8bMWU2Kw2NHwp0/maJIxmrBnap7r5CNfhYomJK2IQDSJ28jBSpSuk4vettro4hryudcQxuqLzHunjucFBqknaa9m935+JneajG22u9v7+7ODHtZtcKf5lmVyLk1KbvorN/ffTH0121Zm8b3UtFKrVJutPBHJz2QcNV6HooRqkly3vavv4C46vcVx2JnpwMvjvZutNy9u9bu+VfdgxcrUrrwYcDDpUuXX8yZtV0wYyam+/VeZpw8RtcKer53rwvfT4eRTm3qu9un3VpXz8yt4nDG30d+K2S8xdVS/tXP1Gr5Out7WefbLcaXFq3rzK2TbsSaXIXC5jJC4W7EZpS1L3NpaFE0X4W2o52PipXSvqdPBxaRgxVp8i7Lv2S5wzy5ZSAsKZCzIZCoKYEsSHUStMdTBJuADiMphGFdCuJdwkcQG1HCZMaVs2Y8qRz2KqiACkFCUgBgIAUMZU7C0CgDSneqI2UYc68C7cRwvGNGYvAXQyLa0A27LZjCUdVTNUe15pVBKvvqc2GQmjRhZV8lXfdly1NkrQ+1cR6vxTfs931ZZl8xjTW1Lqw4GSVp4j033ptdxujjJRUVoui6lyX7U3U6jH+JJe96jyxI1qlT3XVD4rTObmsetGqSV3evd4a/ILwXbPi4/FLib32j0itUvGjL2jLVb00nXIEZU1e75dEHOR9mPc5L5Ga2VgIGKEF8GLhBqtSYQAJPUvwdQf7a9W6LkqjS5tFTFNyU421F+DsJjLl1Hw1oV9TemIItkM2ixMZMrQyGRwgSHUQJEWQAojoE08QsVMsSKSxZ7ZGFm3tDkjETWuPQoiCQRgwoDGQEjAwgGEobDkBiCNpLMLHcdjPhy5PyL8KFgbdhdpPfZ9U6Hhnq5rnevJlOHkrNmF2fHoVNluEjm2+V+WhdFs0rBjFbFM5IrSdo2cPtDEuT1v8+XwNmbxaTp6ujm4kk9Hp0JypyK8Fa2+79jRn9orvk/kVYEdbfkvqDMyuXyJNUyEoABZelF+DB6FWXhbOjhwqkVjNpyukxFSK8SWkfC/UfOJ6JbsozHvV0pF1EM9dR44wmFLcCSQjZCEIZtDFkCpMeLAq0RGso4gOQ06X8YVMoQ6AaWqRZGZQgoZaUZ6dy8jOWZncqRK50JBbGTGAYwrCgMSBAgJGSJGAALY2Hi/uVNAEbq4Odrc1xzy6nBjKi4N09R2Vne8z42dXIxqFopxFWg90aiyUuLmUcNujRgwrUXHVOxBUp0yuTsvkktSiSAlscRXfdSRW4/EUugrXgAacjFK2zVhu5WZcGGiXXXyNMnXiaY9MsuzyjxYngYZu5N97N+E9Ne/4HNsdEWRL4xTM8C5SFDrCQhDNogyIQAYJCARkxrIQZCmNxAIBM2PuVIhBLgMhCABZIsJABkStCEGQAIQKBkishBGhbhSCQBGjD10XMGLCqXxCQDTDJiK0QgBmhF3qSer8LIQQLDDtmlxpEIMmjLvn5ExJW0EhpOmX1olP2Hp/C7OWQgZDFZAeiEA3/9k=',
          info: 'INTRODUCING “INSIDE THE LAST OF US PART II” VIDEO SERIES',
          date: '25/05/2020',
        },
        {
          id: '2',
          foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlaDu_3YCYLrf68z1R1dykqNmX5K4Fvsv-EdLZUQX5IqjvrmK4&usqp=CAU',
          info: 'Watch the new the last of us part 2 story trailer',
          date: '25/05/2020',
        },
         {
          id: '3',
          foto: 'data:image/jpeg;base64,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',
          info: 'Watch the new the last of us part 2 story trailer',
          date: '25/05/2020',
        }, 
      ],
      cardsPress:[
        {
          id: '1',
          foto: 'https://s3.us-east-1.amazonaws.com/nd.images/uploads/imager/naughtydogblog/3585/TheLastofUsPartII_E32018_06_a28eead6fbbb817cb84cdf0116666093.jpg',
          press: 'variety',
          info: 'THE LAST OF US PART II’ CREATOR EXPLAINS GAME’S NEED TO MAKE YOU UNCOMFORTABLE',
          subInfo: 'How do you come back for a “Part II,” after sealing off a story with a deftness that’s so rare for this industry? Naughty Dog vice president Neil Druckmann discusses.',
        },
        {
          id: '2',
          foto: 'https://s3.us-east-1.amazonaws.com/nd.images/uploads/imager/naughtydogblog/3581/UTLL-Launch-Screenshot_01_a28eead6fbbb817cb84cdf0116666093.png',
          press: 'kotaku',
          info: 'THE LAST OF US PART II’ CREATOR EXPLAINS GAME’S NEED TO MAKE YOU UNCOMFORTABLE',
          subInfo: 'How do you come back for a “Part II,” after sealing off a story with a deftness that’s so rare for this industry? Naughty Dog vice president Neil Druckmann discusses.',
        },
        {
          id: '3',
          foto: 'https://s3.us-east-1.amazonaws.com/nd.images/uploads/imager/naughtydogblog/3685/TLOU_Gamescom2012_Keyart_FINAL_small_d4e4e04a52bfbdbeab5ba4d2cf1d1390_d4e4e04a52bfbdbeab5ba4d2cf1d1390_a28eead6fbbb817cb84cdf0116666093.jpg',
          press: 'polygon',
          info: 'THE LAST OF US PART II’ CREATOR EXPLAINS GAME’S NEED TO MAKE YOU UNCOMFORTABLE',
          subInfo: 'How do you come back for a “Part II,” after sealing off a story with a deftness that’s so rare for this industry? Naughty Dog vice president Neil Druckmann discusses.',
        },
      ]
      
}

const  mutations = {

}
const actions = {

}
const getters = {
  cards: (state) =>{
    return state.cards
  },
  cardsPress:(state) => {
    return state.cardsPress
  },
   slides: (state) => {
      return state.slides
  }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters,
}