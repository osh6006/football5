import styled from "styled-components";
import SectionHeader from "./SectionHeader";
import useFakeStandings from "../../hooks/fake/useFakeStandings";
import Loading from "../common/Loading";
import { Standing } from "../../type/standings";
import useColor from "../../hooks/useColor";
import { mix } from "polished";
import Error from "../common/Error";

interface TableProps {
  $color: string;
}

const RankTableWrapper = styled.div`
  margin-top: 2rem;
  font-family: sans-serif;
  font-weight: bold;
  border-radius: 10px;
  overflow: hidden;
`;

const StyledTableContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  margin-top: 1rem;
  border-collapse: collapse;
  margin-bottom: 20px;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors.secondBackground};
`;

const TableRow = styled.tr<TableProps>`
  &:nth-child(even) {
    background-color: ${(props) => mix(0.8, "#808080", props.$color)};
  }
`;

const TableHeaderCell = styled.th`
  white-space: nowrap;
  padding: 1rem;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.secondBackground};
`;

const TabletOnlyHeaderCell = styled(TableHeaderCell)`
  @media (max-width: 970px) {
    display: none;
  }
`;

const DesktopOnlyHeaderCell = styled(TableHeaderCell)`
  @media (max-width: 1080px) {
    display: none;
  }
`;

const TableCell = styled.td`
  padding: 1rem;
  text-align: center;
`;

const TabletOnlyTableCell = styled(TableCell)`
  @media (max-width: 970px) {
    display: none;
  }
`;

const DesktopOnlyTableCell = styled(TableCell)`
  @media (max-width: 1080px) {
    display: none;
  }
`;

const LogoNameWrapper = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const LogoWrapper = styled.span<TableProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  border-radius: 100%;
  background-color: ${(props) => props.$color};
`;

const Logo = styled.img`
  width: 25px;
`;

const RankTable = () => {
  const {
    fakeStandingsQuery: { data: teams, isLoading, isError },
  } = useFakeStandings();
  const color = useColor();

  return (
    <RankTableWrapper>
      <SectionHeader title="리그 순위" src="123" />
      {isError && <Error message="데이터가 없습니다." />}
      {isLoading && <Loading />}
      {isLoading || (
        <StyledTableContainer>
          <Table>
            <thead>
              <tr>
                <TableHeaderCell>순위</TableHeaderCell>
                <TableHeaderCell>클럽</TableHeaderCell>
                <TabletOnlyHeaderCell>경기 수</TabletOnlyHeaderCell>
                <TabletOnlyHeaderCell>골득실</TabletOnlyHeaderCell>
                <TableHeaderCell>승점</TableHeaderCell>
                <DesktopOnlyHeaderCell>최근 경기</DesktopOnlyHeaderCell>
              </tr>
            </thead>
            <tbody>
              {teams &&
                teams[0]?.league?.standings[0]?.map(
                  (team: Standing, index: number) =>
                    index < 10 && (
                      <TableRow $color={color || "#fff"} key={team.team.id}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>
                          <LogoNameWrapper>
                            <LogoWrapper $color={color || "#fff"}>
                              <Logo src={team.team.logo} alt="TeamLogo" />
                            </LogoWrapper>
                            {team.team.name}
                          </LogoNameWrapper>{" "}
                        </TableCell>
                        <TabletOnlyTableCell>{team.all.played}</TabletOnlyTableCell>
                        <TabletOnlyTableCell>{team.goalsDiff}</TabletOnlyTableCell>
                        <TableCell>{team.points}</TableCell>
                        <DesktopOnlyTableCell>{team.form}</DesktopOnlyTableCell>
                      </TableRow>
                    )
                )}
            </tbody>
          </Table>
        </StyledTableContainer>
      )}
    </RankTableWrapper>
  );
};

export default RankTable;
