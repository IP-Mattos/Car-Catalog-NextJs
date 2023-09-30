import { MouseEventHandler } from 'react'

export interface CustomButtonProps {
  title: string
  containerStyles?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
  btnType?: 'button' | 'submit'
  textStyles?: string
  rightIcon?: string
  isDisabled?: boolean
}

export interface SearchManufacturerProps {
  manufacturer: string
  setManufacturer: (manufacturer: string) => void
}

export interface CarsProps {
  city_mpg: number
  year: number
  class: string
  combination_mpg: number
  cylinders: number
  displacement: number
  drive: string
  fuel_type: string
  highway_mpg: number
  make: string
  model: string
  transmission: string
}

export interface FilterProps {
  manufacturer: string
  year: number
  fuel: string
  limit: number
  model: string
}

export interface OptionsProps {
  title: string
  value: string
}
export interface CustomFiltersProps {
  title: string
  options: OptionsProps[]
}
