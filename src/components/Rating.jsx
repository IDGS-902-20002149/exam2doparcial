const RatingStars = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating); // Parte entera de la calificación
    const remainingStars = 5 - fullStars; // Estrellas restantes después de las llenas

    // Agregar estrellas completas
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-warning">
          ★
        </span>
      );
    }

    // Agregar estrella fraccionaria si es necesario
    if (remainingStars > 0) {
      const decimalPart = rating - fullStars; // Parte decimal de la calificación
      const fractionalWidth = Math.round(decimalPart * 100);

      stars.push(
        <span
          key={fullStars}
          className="text-warning"
          style={{ width: `${fractionalWidth}%`, overflow: "hidden" }}
        >
          ★
        </span>
      );

      // Agregar estrellas restantes en gris
      for (let i = 1; i < remainingStars; i++) {
        stars.push(
          <span key={fullStars + i} className="text-secondary">
            ★
          </span>
        );
      }
    }

    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default RatingStars;
