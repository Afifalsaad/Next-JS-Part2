export const feedback = [
  {
    id: 1,
    message: "Food was delicious",
  },
  {
    id: 2,
    message: "So much salt",
  },
  {
    id: 3,
    message: "Service was good",
  },
];

export async function GET(request) {
  return Response.json({
    status: 200,
    message: "API Created",
  });
}
