import { ScrabbleTile as TileType } from "@/types/scrabble";
import { ScrabbleTile } from "./ScrabbleTile";
import { Button } from "@/components/ui/button";
import { Shuffle } from "lucide-react";

interface ScrabbleRackProps {
    tiles: TileType[];
    selectedTileId: string | null;
    onSelectTile: (id: string) => void;
    onShuffle: () => void;
}

export const ScrabbleRack = ({ tiles, selectedTileId, onSelectTile, onShuffle }: ScrabbleRackProps) => {
    return (
        <div className="flex items-center gap-4 bg-wood p-4 rounded-xl shadow-inner bg-[#4a3728] text-white overflow-x-auto min-h-[5rem]">
            {/* Rack Stand Visual */}
            <div className="flex gap-2 mx-auto">
                {tiles.length === 0 && (
                    <span className="text-white/50 text-sm italic py-2">Rack is empty</span>
                )}
                {tiles.map((tile) => (
                    <ScrabbleTile
                        key={tile.id}
                        tile={tile}
                        isSelected={selectedTileId === tile.id}
                        onClick={() => onSelectTile(tile.id)}
                    />
                ))}
            </div>

            <Button
                variant="ghost"
                size="icon"
                onClick={onShuffle}
                className="text-white/50 hover:text-white hover:bg-white/10"
                title="Shuffle Rack"
            >
                <Shuffle className="w-5 h-5" />
            </Button>
        </div>
    );
};
