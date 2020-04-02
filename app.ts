
//-----------------------inersection----------------------------------


type Named1 = {
  name: string
}

type Aged1 = {
  age: number
}

type Combinable = boolean | number

// type Universal = Named1 | Combinable   
type Universal = Named1 & Combinable  // same result