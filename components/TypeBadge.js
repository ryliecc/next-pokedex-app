import { styled } from "styled-components";

const Badge = styled.div`
  width: 6em;
  height: 1.6em;
  border: 1px solid black;
`;

const Text = styled.p`
  font-size: 1em;
  text-align: center;
  padding: 0.1em;
`;

export default function TypeBadge({ type }) {
  const text = type.charAt(0).toUpperCase() + type.slice(1);
  return (
    <Badge>
      <Text>{text}</Text>
    </Badge>
  );
}
