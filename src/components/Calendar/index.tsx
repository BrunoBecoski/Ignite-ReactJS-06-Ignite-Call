import { useMemo, useState } from 'react'
import dayjs from 'dayjs'
import { CaretLeft, CaretRight } from 'phosphor-react'

import { getWeekDays } from '../../utils/get-week-days'

import {
  CalendarContainer,
  CalendarHeader,
  CalendarTitle,
  CalendarActions,
  CalendarBody,
  CalendarDay,
} from './styles'

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs().set('date', 1)
  })

  function handlePreviousMonth() {
    const previousMonthDate = currentDate.subtract(1, 'month')

    setCurrentDate(previousMonthDate)
  }

  function handleNextMonth() {
    const nextMonthDate = currentDate.add(1, 'month')

    setCurrentDate(nextMonthDate)
  }

  const shortWeekDays = getWeekDays({ short: true })

  const currentMonth = currentDate.format('MMMM')
  const currentYear = currentDate.format('YYYY')

  const calendarWeeks = useMemo(() => {
    const daysInMonthArray = Array.from({
      length: currentDate.daysInMonth(),
    }).map((_, i) => {
      return currentDate.set('date', i + 1)
    })

    const firstWeekDay = currentDate.get('day')

    const previousMonthFillArray = Array.from({
      length: firstWeekDay,
    })
      .map((_, i) => {
        return currentDate.subtract(i + 1, 'day')
      })
      .reverse()

    return [...previousMonthFillArray, ...daysInMonthArray]
  }, [currentDate])

  console.log(calendarWeeks)

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          {currentMonth} <span>{currentYear}</span>
        </CalendarTitle>

        <CalendarActions>
          <button onClick={handlePreviousMonth} title="Mês anterior">
            <CaretLeft />
          </button>

          <button onClick={handleNextMonth} title="Próximo mês">
            <CaretRight />
          </button>
        </CalendarActions>
      </CalendarHeader>

      <CalendarBody>
        <thead>
          <tr>
            {shortWeekDays.map((weekDay) => (
              <th key={weekDay}>{weekDay}.</th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr>
            <td></td>

            <td></td>

            <td></td>

            <td>
              <CalendarDay disabled>1</CalendarDay>
            </td>

            <td>
              <CalendarDay disabled>2</CalendarDay>
            </td>

            <td>
              <CalendarDay disabled>3</CalendarDay>
            </td>
            <td>
              <CalendarDay disabled>4</CalendarDay>
            </td>
          </tr>

          <tr>
            <td>
              <CalendarDay disabled>5</CalendarDay>
            </td>

            <td>
              <CalendarDay disabled>6</CalendarDay>
            </td>

            <td>
              <CalendarDay disabled>7</CalendarDay>
            </td>

            <td>
              <CalendarDay disabled>8</CalendarDay>
            </td>

            <td>
              <CalendarDay disabled>9</CalendarDay>
            </td>

            <td>
              <CalendarDay disabled>10</CalendarDay>
            </td>

            <td>
              <CalendarDay disabled>11</CalendarDay>
            </td>
          </tr>

          <tr>
            <td>
              <CalendarDay disabled>12</CalendarDay>
            </td>

            <td>
              <CalendarDay>13</CalendarDay>
            </td>

            <td>
              <CalendarDay>14</CalendarDay>
            </td>

            <td>
              <CalendarDay>15</CalendarDay>
            </td>

            <td>
              <CalendarDay>16</CalendarDay>
            </td>

            <td>
              <CalendarDay>17</CalendarDay>
            </td>

            <td>
              <CalendarDay>18</CalendarDay>
            </td>
          </tr>

          <tr>
            <td>
              <CalendarDay>19</CalendarDay>
            </td>

            <td>
              <CalendarDay>20</CalendarDay>
            </td>

            <td>
              <CalendarDay>21</CalendarDay>
            </td>

            <td>
              <CalendarDay>22</CalendarDay>
            </td>

            <td>
              <CalendarDay>23</CalendarDay>
            </td>

            <td>
              <CalendarDay>24</CalendarDay>
            </td>

            <td>
              <CalendarDay>25</CalendarDay>
            </td>
          </tr>

          <tr>
            <td>
              <CalendarDay>26</CalendarDay>
            </td>

            <td>
              <CalendarDay>27</CalendarDay>
            </td>

            <td>
              <CalendarDay>28</CalendarDay>
            </td>

            <td>
              <CalendarDay>29</CalendarDay>
            </td>

            <td>
              <CalendarDay>30</CalendarDay>
            </td>

            <td>
              <CalendarDay>31</CalendarDay>
            </td>

            <td></td>
          </tr>
        </tbody>
      </CalendarBody>
    </CalendarContainer>
  )
}
