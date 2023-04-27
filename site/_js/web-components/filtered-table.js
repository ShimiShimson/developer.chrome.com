/*
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview A component for wrapping a table of results that need to be filtered. Has access to the state
 * and can display an empty state message.
 */
import {BaseStateElement} from './base-state-element';

export class FilteredTable extends BaseStateElement {
  connectedCallback() {
    super.connectedCallback();
    this.headerRow = this.querySelector('.filtered__header');
    this.placeholder = this.querySelector('.filtered__empty');
  }

  onStateChanged() {
    requestAnimationFrame(() => {
      const rows = this.querySelectorAll('filtered-element:not([hidden])');
      if (rows.length === 0) {
        this.headerRow?.setAttribute('hidden', '');
        this.placeholder?.removeAttribute('hidden');
        return;
      }
      this.headerRow?.removeAttribute('hidden');
      this.placeholder?.setAttribute('hidden', '');
    });
  }
}
customElements.define('filtered-table', FilteredTable);