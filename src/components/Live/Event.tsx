import styled from "styled-components";
import { Events } from "../../type/fixtures";

interface EventProps {
  events?: Events[];
}

const EventWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem 0;
  border: 2px solid gray;
`;

const TempDiv = styled.div``;

const EventContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem 0;
`;

const EventContents = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Logo = styled.img`
  max-width: 20px;
`;

const Event: React.FC<EventProps> = ({ events }) => {
  return (
    <EventWrapper>
      <TempDiv></TempDiv>
      <EventContentsWrapper>
        {events &&
          events.map((event) => (
            <EventContents key={event.time.elapsed}>
              <Logo src={event.team.logo} alt="TeamLogo" />
              {`${event.time.elapsed}" ${event.comments === null ? "" : event.comments} ${
                event.detail === null ? "" : event.detail
              } - ${event.player.name}`}
            </EventContents>
          ))}
      </EventContentsWrapper>
      <TempDiv></TempDiv>
    </EventWrapper>
  );
};

export default Event;
