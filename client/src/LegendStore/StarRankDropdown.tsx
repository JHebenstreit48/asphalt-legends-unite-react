import "../CSS/StarRankDropdown.css"; // Import the dedicated CSS file

const StarRankDropdown: React.FC<{
  selectedStarRank: number | null;
  onChange: (rank: number | null) => void;
}> = ({ selectedStarRank, onChange }) => {
  const starRanks = [3, 4, 5, 6]; // Star ranks to display

  return (
    <select
      className="starRankSelector" // Use the CSS class from the new file
      value={selectedStarRank !== null ? selectedStarRank : ""}
      onChange={(e) =>
        onChange(e.target.value ? parseInt(e.target.value, 10) : null)
      }
    >
      <option value="">All Ranks</option>
      {starRanks.map((rank) => (
        <option key={rank} value={rank} data-stars={rank}>
          {`${rank} Stars`} {/* Fallback text for accessibility */}
        </option>
      ))}
    </select>
  );
};

export default StarRankDropdown;
