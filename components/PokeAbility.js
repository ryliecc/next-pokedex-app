import { styled } from "styled-components";
import useAbility from "../swr/useAbility";

const Item = styled.li`
  display: flex;
  flex-direction: column;
  margin: 0.6em 0;
`;

const Name = styled.h3``;

const Description = styled.p``;

export default function Ability({ abilityName }) {
  const { abilityData, isLoading, isError } = useAbility(abilityName);

  const enNameArr = abilityData?.names.find(
    (name) => name.language.name === "en"
  );
  const enName = enNameArr?.name;
  const enEffectArr = abilityData?.effect_entries.find(
    (entry) => entry.language.name === "en"
  );
  const enEffect = enEffectArr?.effect;

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error fetching {abilityName}...</div>;
  }
  return (
    <>
      <Item key={enName}>
        <Name>{enName}</Name>
        <Description>{enEffect}</Description>
      </Item>
    </>
  );
}
