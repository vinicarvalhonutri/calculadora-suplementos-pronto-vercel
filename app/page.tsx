'use client';
'use client';

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function SupplementCalculator() {
  const [weight, setWeight] = useState(70)

  const format = (value, unit = "g") => `${parseFloat(value).toFixed(1)} ${unit}`

  const supplements = [
    {
      name: "Bicarbonato de sódio",
      dose: weight => `${format(0.3 * weight * 1000, "mg")} - ${format(0.5 * weight * 1000, "mg")}`,
      duration: "1-3 dias antes de eventos intensos"
    },
    {
      name: "Creatina (carregamento)",
      dose: weight => `${format(0.3 * weight)} / dia`,
      duration: "5-7 dias"
    },
    {
      name: "Creatina (manutenção)",
      dose: weight => `${format(0.03 * weight)} / dia`,
      duration: "contínuo"
    },
    {
      name: "Cafeína",
      dose: weight => `${format(3 * weight, "mg")} - ${format(6 * weight, "mg")} antes do treino`,
      duration: "uso agudo"
    },
    {
      name: "Proteína (jovens)",
      dose: weight => `${format(0.3 * weight)} / refeição`,
      duration: "contínuo"
    },
    {
      name: "Proteína (idosos)",
      dose: weight => `${format(0.4 * weight)} / refeição`,
      duration: "contínuo"
    },
    {
      name: "Beta-alanina (carregamento)",
      dose: weight => `${format(3 * weight)} - ${format(6 * weight)} / dia`,
      duration: "4-10 semanas"
    },
    {
      name: "Beta-alanina (manutenção)",
      dose: () => "1,2 g / dia",
      duration: "após 4-10 semanas"
    },
    {
      name: "Suco de beterraba (agudo)",
      dose: () => "140 mL (~8,4 mmol)",
      duration: "2-2,5 h antes do exercício"
    },
    {
      name: "Suco de beterraba (crônico)",
      dose: () => "5-9 mmol / dia",
      duration: "1-28 dias"
    },
    {
      name: "Carboidrato (pré)",
      dose: weight => `${format(3 * weight)} - ${format(4 * weight)} 3-4 h antes`,
      duration: "uso agudo"
    },
    {
      name: "Carboidrato (enxágue bucal)",
      dose: () => "Enxágue com solução de CHO",
      duration: "Durante exercício < 60 min"
    },
    {
      name: "Carboidrato (1–2 h)",
      dose: () => "30–60 g/h de glicose ou maltodextrina",
      duration: "Durante exercício"
    },
    {
      name: "Carboidrato (≥2,5 h)",
      dose: () => "90 g/h (glicose + frutose 2:1)",
      duration: "Durante exercício prolongado"
    },
    {
      name: "Carboidrato (pós)",
      dose: weight => `${format(1.2 * weight)} / h ou ${format(0.8 * weight)} CHO + ${format(0.4 * weight)} proteína`,
      duration: "Imediatamente após"
    }
  ]

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Calculadora de Suplementos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <Label htmlFor="weight">Peso corporal (kg)</Label>
          <Input
            id="weight"
            type="number"
            value={weight}
            onChange={e => setWeight(parseFloat(e.target.value))}
            min={30}
            max={200}
          />
        </div>
      </div>

      <div className="grid gap-4">
        {supplements.map((supplement, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold mb-1">{supplement.name}</h2>
              <p><strong>Dose recomendada:</strong> {supplement.dose(weight)}</p>
              <p><strong>Duração:</strong> {supplement.duration}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
