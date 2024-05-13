'use client';

import instance from '@/utils/axios';
import { useQuery } from 'react-query';

type Challenger = {
  summonerId: string;
  leaguePoints: number;
  rank: string;
  wins: number;
  losses: number;
  inactive: boolean;
  freshBlood: boolean;
  hotStreak: boolean;
};

const getChallengerList = async (): Promise<Challenger[]> => {
  // const { data } = await instance.get<Challenger[]>('/challenger?queue=RANKED_TFT');
  const { data } = await instance.get<Challenger[]>('/api/challenger');
  return data;
};

const ChallengerList = () => {
  const { data, isLoading, error } = useQuery<Challenger[]>('challengerList', getChallengerList);
  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>데이터를 불러오는데 실패했습니다.</div>;

  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>순위</th>
            <th></th>
            <th>소환사</th>
            <th>티어</th>
            <th>LP</th>
            <th>승률</th>
            <th>TOP4%</th>
            <th>게임 수</th>
            <th>승</th>
            <th>TOP4</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((challenger) => (
            <tr>
              <td>{challenger.summonerId}</td>
              <td></td>
            </tr>
          ))}
          <tr>
            <td>asdfasdasdfasdasdfasdasdfasdasdfasdasdfasdasdfasdasdfasdasdfasd</td>
            <td>asdfasdf</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default ChallengerList;
