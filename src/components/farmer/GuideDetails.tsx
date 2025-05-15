
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface NutrientRequirement {
  nutrient: string;
  amount: string;
  importance: string;
}

interface PlantGuide {
  id: string;
  name: string;
  image: string;
  description: string;
  growingSeason: string[];
  difficulty: "Easy" | "Medium" | "Hard";
  daysToMaturity: string;
  spacing: string;
  sunlight: string;
  waterNeeds: string;
  soilType: string;
  nutrientRequirements: NutrientRequirement[];
  commonPests: string[];
  tips: string[];
}

interface GuideDetailsProps {
  guide: PlantGuide;
}

const GuideDetails = ({ guide }: GuideDetailsProps) => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/5">
          <img 
            src={guide.image} 
            alt={guide.name} 
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>
        
        <div className="md:w-3/5">
          <h1 className="text-3xl font-bold text-market-dark-green mb-2">{guide.name}</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {guide.growingSeason.map((season) => (
              <Badge key={season} variant="outline" className="bg-market-light-green text-market-dark-green">
                {season}
              </Badge>
            ))}
            <Badge 
              variant="outline" 
              className={`
                ${guide.difficulty === 'Easy' ? 'bg-green-100 text-green-800' : ''}
                ${guide.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' : ''}
                ${guide.difficulty === 'Hard' ? 'bg-red-100 text-red-800' : ''}
              `}
            >
              {guide.difficulty} Difficulty
            </Badge>
          </div>
          
          <p className="text-gray-700 mb-6">{guide.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-market-primary">Days to Maturity</h3>
              <p>{guide.daysToMaturity}</p>
            </div>
            <div>
              <h3 className="font-semibold text-market-primary">Spacing</h3>
              <p>{guide.spacing}</p>
            </div>
            <div>
              <h3 className="font-semibold text-market-primary">Sunlight</h3>
              <p>{guide.sunlight}</p>
            </div>
            <div>
              <h3 className="font-semibold text-market-primary">Water Needs</h3>
              <p>{guide.waterNeeds}</p>
            </div>
            <div>
              <h3 className="font-semibold text-market-primary">Soil Type</h3>
              <p>{guide.soilType}</p>
            </div>
          </div>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Nutrient Requirements</CardTitle>
          <CardDescription>
            Essential nutrients for healthy growth and maximum yield
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nutrient</TableHead>
                <TableHead>Recommended Amount</TableHead>
                <TableHead>Importance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {guide.nutrientRequirements.map((nutrient, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{nutrient.nutrient}</TableCell>
                  <TableCell>{nutrient.amount}</TableCell>
                  <TableCell>{nutrient.importance}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Common Pests & Diseases</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              {guide.commonPests.map((pest, index) => (
                <li key={index} className="text-gray-700">{pest}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Growing Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              {guide.tips.map((tip, index) => (
                <li key={index} className="text-gray-700">{tip}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GuideDetails;
