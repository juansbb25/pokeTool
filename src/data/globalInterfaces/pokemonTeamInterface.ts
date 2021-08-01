import { Poke } from '../ApiInterfaces/intefaces'
import { DamageRelations } from '../ApiInterfaces/typesInterfaces'

export interface PokemonTeam {
  PokemonMembers: Array<Poke>
  teamDoubleDamageFrom: Array<DamageRelations>
}
export interface PokemonTeams {
  pokeTeams: Array<PokemonTeam>
}
