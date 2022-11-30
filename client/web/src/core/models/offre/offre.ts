import { OffreDTO } from "@core/generated/OffreDTO";


export interface OffreData {
  id: number;
  titre_offre: string;
  conditions_utilisation: string;
  quantite: number;
  description: string;
  prix_initial: number;
  pourcentage_prix_initial: number;
  prix_remise: number;
  prestataire_id: number;
  statut: string;
}

export namespace OffreData {
  export function mapToApiValue(data: OffreData): OffreDTO {
    return {
      id: data.id,
      titre_offre: data.titre_offre,
      conditions_utilisation: data.conditions_utilisation,
      quantite: data.quantite,
      description: data.description,
      prix_initial: data.prix_initial,
      pourcentage_prix_initial: data.pourcentage_prix_initial,
      prix_remise: data.prix_remise,
      prestataire_id: data.prestataire_id,
      statut: data.statut
    };
  }
}
