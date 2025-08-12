const seats = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const MovieTicket = () => {
  return (
    <section>
      <div>
        {/* <h1>{movieTitle}</h1> */}
        <p>Cineplex Entertaiment Toronto ON</p>
      </div>
      <div>
        <p> Available</p>
        <p> Booked</p>
        <p> Selected</p>
      </div>
      <div className="grid grid-cols-[20px_1fr_1fr] gap-4">
        <div className="flex flex-col justify-between gap-4">
          {seats.map((seat) => (
            <span key={seat}>{seat}</span>
          ))}
        </div>
        <div>
          {Array.from({ length: seats.length }, (_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-4 gap-4"
            >
              {Array.from({ length: 4 }, (_, colIndex) => {
                const seatNumber = rowIndex * 4 + colIndex + 1;
                return (
                  <div
                    key={colIndex}
                    className="bg-green-300 p-4 text-center rounded cursor-pointer hover:bg-green-400"
                  >
                    Seat {seatNumber}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div>
          {Array.from({ length: seats.length }, (_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-4 gap-4"
            >
              {Array.from({ length: 4 }, (_, colIndex) => {
                const seatNumber = rowIndex * 4 + colIndex + 1;
                return (
                  <div
                    key={colIndex}
                    className="bg-green-300 p-4 text-center rounded cursor-pointer hover:bg-green-400"
                  >
                    Seat {seatNumber}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieTicket;
